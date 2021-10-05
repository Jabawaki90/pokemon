import React from "react";
import { useEffect, useState } from "react";
import { Home, SinglePage, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, Form } from "./component";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pokemon/:id" children={<SinglePage />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
