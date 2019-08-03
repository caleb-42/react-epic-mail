import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Nav from "./partitions/Navigation";
import Tabs from "./partitions/Tabs";
import Header from "./partitions/Header";

export const Home = ({ history }) => {

  return (
    <div className="wrapper w-screen flex flex-row h-screen relative">
      <Nav position="side" />
      <div className="main w-4/5 flex flex-col">
        <Header className="w-full" />
        <Nav position="top" className="" />
        <Tabs className="flex-grow" />
        {/* <a className="anim newMail img-cov wht modalopen" data-action="send" data-modal="#newMailModal">
        </a> */}
      </div>
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.object
}

export default Home;