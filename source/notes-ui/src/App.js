import React from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import Routes from "./components/Route";

function App() {
  return (
    <HashRouter>
      <div className='h-screen' style={{ background: "#111" }}>
        <Switch>
          <Route path='/notes' component={Routes} />

          <Route exact path='/' component={() => <Redirect to='/notes' />} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
