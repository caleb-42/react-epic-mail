import React from "react";
import renderer from "react-test-renderer";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "@redux/configureStore";
import NewMail from "./NewMail";

const store = configureStore();

let defaultProps;
const FakeNewMail = (args) => {
  defaultProps = {
    response: { menu: 'Mails' },
    actions: {
      sendMail: jest.fn(() => { }),
      saveMail: (jest.fn(() => { }))
    }
  }
  const props = { ...defaultProps, ...args };
  const store = configureStore(props);
  return render(
    <ReduxProvider store={store}>
      <NewMail />
    </ReduxProvider>
  )
}

describe('SNAPSHOT TEST', () => {

  it("Header Component", () => {
    const tree = renderer.create(
      <ReduxProvider store={store}>
        <NewMail />
      </ReduxProvider >
    );
    expect(tree).toMatchSnapshot();
  });
})
