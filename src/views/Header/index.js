import React from 'react';
import { connect } from "react-redux";
import { toggleNavigation } from '@redux/actions/navActions';
import { clearActiveMail } from '@redux/actions/mailActions';
import "hamburgers/_sass/hamburgers/hamburgers.scss";
import './index.scss';

const Header = ({
  className, activeNav, mails,
  toggleNavigation, clearActiveMail
}) => {
  const { active } = mails;
  const [navOpen, setNavOpen] = React.useState(false)
  const openNav = () => {
    toggleNavigation(!navOpen);
    setNavOpen(!navOpen)
  }
  return (
    <div className={`${className} ${(Object.keys(active).length > 0) ? 'post-active' : ''} flex relative z-20 header py-4 px-8 h-16`}>
      <a href="#" className="logo"></a>
      <div className="backbtn" onClick={clearActiveMail}></div>
      <h1 id="tabname" className="text-2xl text-white font-semibold self-center">{activeNav.subMenu || activeNav.menu}</h1>
      <button onClick={openNav} className={`hamburger hamburger--collapse ${navOpen ? 'is-active' : ''}`} type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeNav: state.activeNav,
    mails: state.mails
  }
}

export default connect(mapStateToProps, { toggleNavigation, clearActiveMail })(Header);
