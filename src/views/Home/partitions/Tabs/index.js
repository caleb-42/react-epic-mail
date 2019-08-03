import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Mails from './Mails';
import './index.scss';

const Tabs = ({ activeNav, className }) => {
  const activeTab = () => {
    switch (activeNav) {
      case 'Mails':
        return <Mails />
      default:
        return <Mails />
    }
  }
  return (
    <div className={`${className} main-body`}>
      {activeTab()}
    </div>
  );
};

Tabs.propTypes = {
  activeNav: PropTypes.object,
  className: PropTypes.string,
}

function mapStateToProps(state) {
  return {
    activeNav: state.activeNav
  }
}

const matchDispatchToProps = {};

export default connect(mapStateToProps, matchDispatchToProps)(Tabs);