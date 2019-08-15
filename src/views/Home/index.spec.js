import React from "react";
import renderer from "react-test-renderer";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import App from "@routes/app";
import { modal, navs } from '@redux/reducers/initialState';
import configureStore from "@redux/configureStore";
import { Home } from './index'

const store = configureStore();

let defaultProps;

const renderHomePage = (args) => {
  defaultProps = {
    history: { push: jest.fn((nav) => { }) },
    modal,
    navs,
    toggleModal: jest.fn((user) => { })
  }
  const props = { ...defaultProps, ...args };

  return render(
    <ReduxProvider store={store}>
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>
    </ReduxProvider>
  );
}

describe('HOME', () => {

  afterEach(cleanup);

  describe('SNAPSHOT TEST', () => {
    it("home page", () => {
      const tree = renderer.create(
        <ReduxProvider store={store}>
          <MemoryRouter initialEntries={['/home']}>
            <App />
          </MemoryRouter>
        </ReduxProvider>
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe('COMPONENT TEST', () => {
    it("Should open modal if new mail button is clicked", () => {
      const { getByTitle } = renderHomePage();
      fireEvent.click(getByTitle('newMail'));
      expect(defaultProps.toggleModal).toHaveBeenCalled();
    });

    /* 
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
    }); */
  });
});
