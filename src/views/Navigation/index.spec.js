import React from "react";
import renderer from "react-test-renderer";
import { cleanup, render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "@redux/configureStore";
import Nav from "./index";

const store = configureStore();

const FakeNav = (args) => {
  return render(
    <ReduxProvider store={store}>
      <Nav {...args} className="" />
    </ReduxProvider>
  )
}

describe('SNAPSHOT TEST', () => {

  it("Nav Component with SideBar", () => {
    const tree = renderer.create(
      <ReduxProvider store={store}>
        <Nav position="side" />
      </ReduxProvider >
    );
    expect(tree).toMatchSnapshot();
  });

  it("Nav Component with TopBar", () => {
    const tree = renderer.create(
      <ReduxProvider store={store}>
        <Nav position="top" />
      </ReduxProvider >
    );
    expect(tree).toMatchSnapshot();
  });
})

describe('COMPONENT TEST', () => {
  /* 
    afterEach(cleanup);
  
    it("should render menu name in Header", () => {
      const { getByText } = FakeHeader();
      getByText('Mails');
    });
  
    it("should render subMenu name in Header", () => {
      const { getByText } = FakeHeader({ activeNav: { menu: 'Mails', subMenu: 'Inbox' } });
      getByText('Inbox');
    }); */
})
