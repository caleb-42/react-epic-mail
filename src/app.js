import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import "./app.scss";
import Login from "./views/Login";
import Landing from "./views/Landing";

const App = () => {
  return (
    <Router >
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
    </Router>
  )
};
export default App;
