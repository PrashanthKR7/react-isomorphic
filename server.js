import fs from "fs";
import express from "express";
import React from "react";
import { match, RoutingContext } from "react-router-dom";
import { renderToString } from "react-dom/server";
import ContactsApp from "./app/components/ContactsApp";

const app = express();

app.set("views", "./");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const contacts = JSON.parse(
  fs.readFileSync(__dirname + "/public/contacts.json", "utf8")
);

let renderRoute = (response, renderProps) => {};

const ContactsAppFactory = React.createFactory(ContactsApp);

app.get("/", (request, response) => {
  
  let componentInstance = ContactsAppFactory({ contacts: contacts });
  response.render("index", {
    reactInitialData: JSON.stringify(contacts),
    content: renderToString(componentInstance)
  });
});

const server = app.listen(process.env.port || 3000, () => {
  console.log(`Express app listening on port ${server.address().port}`);
});
