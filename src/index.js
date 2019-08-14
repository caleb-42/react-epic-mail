import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "@redux/configureStore";
import { useSetUser } from "@redux/hooks";
import AuthWrapper from './AuthWrapper';

const store = configureStore();

const ReduxApp = () => {
  useSetUser({ ...store });
  return (
    <ReduxProvider store={store}>
      <AuthWrapper />
    </ReduxProvider>
  )
}

ReactDOM.render(
  <ReduxApp />
  , document.querySelector("#app"));

