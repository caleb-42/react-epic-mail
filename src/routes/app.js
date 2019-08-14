import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, HashRouter as Router } from "react-router-dom";
import "./app.scss";
import Login from "@views/Auth/LogIn";
import Signup from "@views/Auth/SignUp";
import Landing from "@views/Landing";
import Main from "@views/Home";
import PrivateRoute from "./privateRoute";

const App = () => {
  return (
    <Router >
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/home" component={Main} />
      <ToastContainer autoClose={5000} position="top-center" hideProgressBar rtl={false} pauseOnHover />
    </Router>
  )
};
export default App;
