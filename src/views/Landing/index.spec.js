import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "@redux/configureStore";
import App from "@routes/app";

const store = configureStore();

it("Landing page", () => {
  const tree = renderer.create(
    <ReduxProvider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </ReduxProvider>
  );
  expect(tree).toMatchSnapshot();
});
