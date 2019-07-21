import React from 'react';
import propTypes from 'prop-types';

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <h3 className="text-white font-lato">EPICMAIL Copyright {new Date().getFullYear()}</h3>
    </footer>
  );
};

Footer.propTypes = {
  className: propTypes.string
}

export default Footer;