import React from "react";
import renderer from "react-test-renderer";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import App from "@routes/app";
import configureStore from "@redux/configureStore";
import { SignUp } from './index'

const store = configureStore();

let defaultProps;

const renderSignUpPage = (args) => {
  defaultProps = {
    history: { push: jest.fn((nav) => { }) },
    auth: {},
    signUpUser: jest.fn((user, cb) => { cb({ data: true }); })
  }
  const props = { ...defaultProps, ...args };

  return render(
    <MemoryRouter>
      <SignUp {...props} />
    </MemoryRouter>
  );
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
    it("Should submit form if register button is clicked", () => {
      const { getByText } = renderSignUpPage();
      fireEvent.click(getByText('Register'));
      expect(defaultProps.signUpUser).toHaveBeenCalled();
      expect(defaultProps.history.push).toHaveBeenCalled();
    });
    it("Should not navigate to hpme page if res.data is false", () => {
      const { getByText } = renderSignUpPage({
        signUpUser: jest.fn((user, cb) => { cb({ data: false }); })
      });
      fireEvent.click(getByText('Register'));
    });
    it("Should call onChange function if form input is changed", () => {
      const { getByPlaceholderText } = renderSignUpPage();
      const input = getByPlaceholderText('username@epicmail.com');
      fireEvent.change(input, { target: { value: '23' } });
    });
  });
});
