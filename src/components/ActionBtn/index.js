import React from 'react';
import PropTypes from 'prop-types';

const SubmitBtn = ({ disabled, saving, title, onClick, className }) => (
  !saving
    ? <button disabled={disabled} onClick={onClick} type="button" className={className}>{title}</button>
    : <div className="loader gone"></div>
);

SubmitBtn.propTypes = {
  disabled: PropTypes.bool,
  saving: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default SubmitBtn;