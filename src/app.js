import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";

const App = () => {
  return <h1 className="header">Hello</h1>;
};

ReactDOM.render(<App />, document.querySelector("#app"));
