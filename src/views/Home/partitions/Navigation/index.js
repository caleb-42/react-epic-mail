import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import { navs } from '@redux/reducers/initialState';
import * as mailActions from "@redux/actions/mailActions";
import SideNav from './SideNav';
import TopNav from './TopNav';
import './index.scss';

const Nav = ({ position = 'top', actions, activeNav }) => {

  const navigate = (nav) => {
    const action = nav.subMenu || nav.menu
    actions[`get${action}`](nav);
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
  actions: bindActionCreators(mailActions, dispatch),
})

export default connect(mapStateToProps, matchDispatchToProps)(Nav);