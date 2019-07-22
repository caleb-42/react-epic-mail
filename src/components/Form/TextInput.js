import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ name, label, onChange, placeholder, type }) => {
  return (
    <>
      <div className="flex input-group items-center">
        <label htmlFor={name}>
          {label}
        </label >
        <input
          type={type || "text"}
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
  error: PropTypes.string
};

export default TextInput;
