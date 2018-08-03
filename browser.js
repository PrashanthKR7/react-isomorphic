import React from "react";
import ReactDOM from "react-dom";
import ContactsApp from "./app/components/ContactsApp";

let initialData = document.getElementById("initial-data").textContent;
if (initialData.length > 0) {
  initialData = JSON.parse(initialData);
}

ReactDOM.render(
  <ContactsApp initialData={initialData} />,
  document.getElementById("root")
);
