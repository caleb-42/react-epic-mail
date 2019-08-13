import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';
import App from "@routes/app";

it("Landing page", () => {
  const tree = renderer.create(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(tree).toMatchSnapshot();
});
