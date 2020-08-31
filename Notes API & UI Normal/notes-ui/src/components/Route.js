import React from "react";
import { Switch, Route } from "react-router-dom";
import NotesForm from "./notes/NotesForm";
import NotesList from "./notes/NotesList";
import NotesUpdate from "./notes/NotesUpdate";

function Routes() {
  return (
    <Switch>
      <Route exact key='Notes' path='/notes' component={NotesForm} />
      <Route exact key='NotesList' path='/notes/list' component={NotesList} />
      <Route exact key='NotesList' path='/notes/:id' component={NotesUpdate} />
    </Switch>
  );
}

export default Routes;
