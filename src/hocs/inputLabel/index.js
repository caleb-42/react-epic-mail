import React from 'react';
import PropType from 'prop-types';

const InputLabel = ({ label, children }) => {
  return (
    <div className="flex input-group items-center">
      <label>
        {label}
      </label >
      {children}
    </div >
  );
};

InputLabel.propTypes = {
  children: PropType.object,
  contClass: PropType.string,
  labelClass: PropType.string,
  label: PropType.string.isRequired
}

export default InputLabel;