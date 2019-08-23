import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import "hamburgers/_sass/hamburgers/hamburgers.scss";

const Nav = () => {
  const [open, openNav] = React.useState(false);
  return (
    <nav className={`appNavig ${open ? 'active' : ''} anim`}>
      <div className="flex md:flex-1 w-full">
        <div className="flex-1 flex justify-between items-center">
          <a href="#" className="logo"></a>
        </div>
        <button onClick={() => openNav(!open)} className={`hamburger hamburger--collapse ${open ? 'is-active' : ''}  md:hidden`} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div className="md:flex md:items-center md:w-auto w-full" id="menu">
        <div>
          <ul className="md:flex items-center justify-between text-base text-white font-montserrat font-medium pt-4 md:pt-0">
            <li><Link className="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-yellow-400" to="#">Features</Link></li>
            <li><Link className="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-yellow-400 md:mb-0 mb-2" to="#">Support</Link></li>
            <li><Link className="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-yellow-400" to="/signup">Sign Up</Link></li>
            <li><Link className="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-yellow-400" to="/login">Log In</Link></li>
          </ul>
        </div>
        <a href="#" className="hidden md:flex md:ml-4 items-center justify-center md:mb-0 mb-4 pointer-cursor">
          <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="/dp.png" alt="Andy Leverenz" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;