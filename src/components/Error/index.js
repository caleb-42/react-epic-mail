import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
  <div className="flex w-full h-full justify-center items-center">
    <h4>{error || 'Failed to fetch'}</h4>
  </div>
);

Error.propTypes = {
  error: PropTypes.string,
}

export default Error;