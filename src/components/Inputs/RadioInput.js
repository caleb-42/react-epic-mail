import React from "react";
import PropTypes from "prop-types";

const RadioInput = ({ checked, onChange, name, value, label, id }) => {
  return (
    <span className="input-group">
      {

        <input checked={checked} onChange={onChange} type="radio" name={name} value={value} id={id} />
      }
      <label htmlFor={id} className="">{label}</label>
    </span>
  );
};

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string
};

export default RadioInput;
