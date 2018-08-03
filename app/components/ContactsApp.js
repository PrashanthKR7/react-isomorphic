import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactList from "./ContactList";
import SearchBar from "./SearchBar";
import fetch from "isomorphic-fetch";

class ContactsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: props.initialData || [],
      filterText: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  componentDidMount() {
    if (!this.props.initialData) {
      ContactsApp.requestInitialData().then(contacts => {
        this.setState({ contacts });
      });
    }
  }

  handleUserInput(searchTerm) {
    this.setState({ filterText: searchTerm });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <ContactList
          contacts={this.state.contacts}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

ContactsApp.propTypes = {
  initialData: PropTypes.any
};

ContactsApp.requestInitialData = () => {
  return fetch("http://localhost:3000/contacts.json").then(response =>
    response.json()
  );
};

export default ContactsApp;
