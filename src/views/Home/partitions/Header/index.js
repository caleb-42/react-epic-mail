import React from 'react';
import { connect } from "react-redux";
import './index.scss';

const Header = ({ className, activeNav }) => {
  return (
    <div className={`${className} flex header py-4 px-8 h-16`}>
      <div className="backbtn"></div>
      <h1 id="tabname" className="text-2xl text-white font-semibold self-center">{activeNav.subMenu || activeNav.menu}</h1>
      <div className="navicon img-con"></div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeNav: state.activeNav
  }
}

export default connect(mapStateToProps, {})(Header);
