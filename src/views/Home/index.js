import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { toggleModal } from '@redux/actions/modalActions'
import "./index.scss";
import Nav from "./Navigation";
import Tabs from "./Tabs";
import Header from "./Header";
import Modal from "./Modal/index";

export const Home = ({ history, modal, toggleModal }) => {
  const openModal = (e, payload) => {
    e.persist();
    toggleModal({ open: true, payload });
  };

  return (
    <div className="wrapper w-screen flex flex-row h-screen relative">
      <Nav position="side" />
      <div className="main w-4/5 flex flex-col">
        <Header className="w-full" />
        <Nav position="top" />
        <Tabs className="flex-grow" />
      </div>
      <button onClick={(e, payload = { kind: 'newMail' }) => openModal(e, payload)} type="button" className="anim newMail"></button>
      <Modal payload={modal.payload} open={modal.open} onCloseModal={() => toggleModal({ ...modal, open: false })} />
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.object
}

const matchStateToProps = (state) => {
  return {
    modal: state.modal
  }
}

const matchDispatchToProps = {
  toggleModal
}

export default connect(matchStateToProps, matchDispatchToProps)(Home);