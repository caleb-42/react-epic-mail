import React from 'react';

const SubmitBtn = ({ disabled, saving, title, onClick, className }) => (
  !saving
    ? <button disabled={disabled} onClick={onClick} type="button" className={className}>{title}</button>
    : <div className="loader gone"></div>
);

export default SubmitBtn;