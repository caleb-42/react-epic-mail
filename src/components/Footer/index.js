import React from 'react';
import propTypes from 'prop-types';
import './index.scss'

const Footer = ({ className }) => {
  return (
    <footer className={`${className} text-center text-sm py-3 w-full`}>
      <h3 className="text-white font-lato">EPICMAIL Copyright {new Date().getFullYear()}</h3>
    </footer>
  );
};

Footer.propTypes = {
  className: propTypes.string
}

export default Footer;