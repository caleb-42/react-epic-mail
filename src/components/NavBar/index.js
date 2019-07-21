import React from 'react';
import './index.scss';

const Nav = () => {
  return (
    <nav className='lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 -mb-24 z-20 relative'>
      <div className="flex-1 flex justify-between items-center">
        <a href="#" className="logo"></a>
      </div>
      <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <div>
          <ul className="lg:flex items-center justify-between text-base text-white font-montserrat font-semibold pt-4 lg:pt-0">
            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-green-400" href="#">Features</a></li>
            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-green-400 lg:mb-0 mb-2" href="#">Support</a></li>
            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-green-400" href="#">Sign Up</a></li>
            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-green-400" href="#">Log In</a></li>
          </ul>
        </div>
        <a href="#" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
          <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg" alt="Andy Leverenz" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;