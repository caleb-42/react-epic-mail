import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ required, name, label, onChange, placeholder, type }) => {
  return (
    <>
      <div className="flex input-group items-center">
        <label htmlFor={name}>
          {label}
        </label >
        <input
          type={type}
          required={required}
          name={name}
          className="input"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div >
    </>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string
};

export default TextInput;
