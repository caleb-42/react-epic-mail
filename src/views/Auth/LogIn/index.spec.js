import React from "react";
import renderer from "react-test-renderer";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import App from "@routes/app";
import { auth } from '@redux/reducers/initialState';
import configureStore from "@redux/configureStore";
import { LogIn } from './index'

const store = configureStore();

let defaultProps;

const renderLogInPage = (args) => {
  defaultProps = {
    history: { push: jest.fn((nav) => { }) },
    auth,
    logInUser: jest.fn((user, cb) => { cb({ data: true }); })
  }
  const props = { ...defaultProps, ...args };

  return render(
    <MemoryRouter>
      <LogIn {...props} />
    </MemoryRouter>
  );
}

describe('LOG IN', () => {

  afterEach(cleanup);

  describe('SNAPSHOT TEST', () => {
    it("log in page", () => {
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
      const { getByText } = renderLogInPage();
      fireEvent.click(getByText('Sign In'));
      expect(defaultProps.logInUser).toHaveBeenCalled();
    });
    it("Should navigate to home page if res.data is true", () => {
      const { getByText } = renderLogInPage({ auth: { ...auth, isAuthenticated: true } });
      /* fireEvent.click(getByText('Register')); */
      expect(defaultProps.history.push).toHaveBeenCalled();
    });
    it("Should not navigate to hpme page if res.data is false", () => {
      const { getByText } = renderLogInPage({
        logInUser: jest.fn((user, cb) => { cb({ data: false }); })
      });
      fireEvent.click(getByText('Sign In'));
    });
    it("Should call onChange function if form input is changed", () => {
      const { getByPlaceholderText } = renderLogInPage();
      const input = getByPlaceholderText('username@epicmail.com');
      fireEvent.change(input, { target: { value: '23' } });
    });
  });
});
