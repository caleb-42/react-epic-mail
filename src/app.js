import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import "./app.scss";
import LogIn from "./views/Auth/LogIn";
import SignUp from "./views/Auth/SignUp";
import Landing from "./views/Landing";
import Home from "./views/Home";

const App = () => {
  return (
    <Router >
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Home} />
    </Router>
  )
};
export default App;
