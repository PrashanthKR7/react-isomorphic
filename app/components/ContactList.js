import React from "react";
import PropTypes from "prop-types";

const ContactsList = props => {
  var filteredContacts = props.contacts.filter(
    contact => contact.name.indexOf(props.filterText) !== -1
  );
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.email}>
          {contact.name} - {contact.email}
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string.isRequired
};

export default ContactsList;
