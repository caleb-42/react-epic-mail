import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import { navs } from '@redux/reducers/initialState';
import * as mailActions from "@redux/actions/mailActions";
import * as authActions from "@redux/actions/authActions";
import SideNav from './SideNav';
import TopNav from './TopNav';
import './index.scss';

const Nav = ({ position = 'top', mailActions, authActions, activeNav }) => {

  const navigate = (nav) => {
    const action = nav.subMenu || nav.menu
    if (nav.menu === 'Sign Out') return authActions.signOut();
    mailActions[`get${action}`](nav);
  }

  return position == 'side' ?
    <SideNav navigate={navigate} activeNav={activeNav} navs={navs} /> :
    <TopNav navigate={navigate} activeNav={activeNav} navs={navs} />
};

Nav.propTypes = {
  activeNav: PropTypes.object,
  position: PropTypes.string,
  actions: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    activeNav: state.activeNav
  }
}

const matchDispatchToProps = (dispatch) => ({
  mailActions: bindActionCreators(mailActions, dispatch),
  authActions: bindActionCreators(authActions, dispatch),
})

export default connect(mapStateToProps, matchDispatchToProps)(Nav);