import React from "react";
import renderer from "react-test-renderer";
import { cleanup, render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "@redux/configureStore";
import Header from "./index";

const store = configureStore();

const FakeHeader = (args) => {
  const defaultProps = {
    activeNav: { menu: 'Mails' }
  }
  const props = { ...defaultProps, ...args };
  const store = configureStore(props);
  return render(
    <ReduxProvider store={store}>
      <Header className="" />
    </ReduxProvider>
  )
}

describe('SNAPSHOT TEST', () => {

  it("Header Component", () => {
    const tree = renderer.create(
      <ReduxProvider store={store}>
        <Header className="" activeNav={{ menu: 'Mails' }} />
      </ReduxProvider >
    );
    expect(tree).toMatchSnapshot();
  });
})

describe('COMPONENT TEST', () => {

  afterEach(cleanup);

  it("should render menu name in Header", () => {
    const { getByText } = FakeHeader();
    getByText('Mails');
  });

  it("should render subMenu name in Header", () => {
    const { getByText } = FakeHeader({ activeNav: { menu: 'Mails', subMenu: 'Inbox' } });
    getByText('Inbox');
  });
})
