import React from "react";
import renderer from "react-test-renderer";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import App from "../src/app";
import configureStore from "../src/redux/configureStore";
import Form from '../src/views/SignUp/Form'

const store = configureStore();

const renderSignUpForm = (args) => {
  let defaultProps = {
    error: '',
    saving: false,
    handleChange: () => { },
    handleSubmit: () => { }
  }
  const props = { ...defaultProps, ...args };
  return render(<Form {...props} />)
}

describe('SIGN UP', () => {

  afterEach(cleanup);

  describe('SNAPSHOT TEST', () => {
    it("Sign up page", () => {
      const tree = renderer.create(
        <ReduxProvider store={store}>
          <MemoryRouter initialEntries={['/signup']}>
            <App />
          </MemoryRouter>
        </ReduxProvider>
      );
      expect(tree).toMatchSnapshot();
    });
  });
  describe('COMPONENT TEST', () => {
    it("Should contain Sign up header", () => {
      const { getByText } = renderSignUpForm();
      getByText('Sign Up');
    });
    it("Should have submit button display Register by default", () => {
      const { getByText } = renderSignUpForm();
      getByText('Register');
    });
    it("Should have submit button display Loading on form submit", () => {
      const { getByText } = renderSignUpForm({ saving: true });
      getByText('Loading');
    });
  });
});
