import React from "react";
import { Switch, Route } from "react-router-dom";
import NotesForm from "./notes/NotesForm";
import NotesList from "./notes/NotesList";

function Routes() {
  return (
    <Switch>
      <Route exact key='Notes' path='/notes' component={NotesForm} />
      <Route exact key='NotesList' path='/notes/list' component={NotesList} />
    </Switch>
  );
}

export default Routes;
