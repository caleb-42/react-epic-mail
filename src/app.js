import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import "./app.scss";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Landing from "./views/Landing";
import Home from "./views/Home";

const App = () => {
  return (
    <Router >
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Home} />
    </Router>
  )
};
export default App;
