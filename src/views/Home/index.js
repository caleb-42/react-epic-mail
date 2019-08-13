import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Nav from "./Navigation";
import Tabs from "./Tabs";
import Header from "./Header";
import Modal from "./Modal/index";

export const Home = ({ history }) => {
  const [modal, setModal] = useState({
    open: false,
    payload: {}
  });

  const openModal = payload => {
    setModal({ open: true, payload });
  };

  return (
    <div className="wrapper w-screen flex flex-row h-screen relative">
      <Nav position="side" />
      <div className="main w-4/5 flex flex-col">
        <Header className="w-full" />
        <Nav position="top" />
        <Tabs className="flex-grow" />
      </div>
      <button onClick={(payload = { kind: 'newmail' }) => openModal(payload)} type="button" className="anim newMail"></button>
      <Modal payload={modal.payload} open={modal.open} onCloseModal={() => setModal({ ...modal, open: false })} />
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.object
}

export default Home;