import React from "react";
import { Switch, Route } from "react-router-dom";
import NotesForm from "./notes/NotesForm";

function Routes() {
  return (
    <Switch>
      <Route exact key='Notes' path='/notes' component={NotesForm} />
    </Switch>
  );
}

export default Routes;
