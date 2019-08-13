import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ required, position, name, label, onChange, placeholder, type, rows }) => {
  return (
    <>
      <div className={`flex ${position} input-group items-center`}>
        <label htmlFor={name}>
          {label}
        </label >
        {
          type === "textarea"
            ? <textarea
              rows={rows}
              required={required}
              name={name}
              className="input"
              placeholder={placeholder}
              onChange={onChange}
            />
            : <input
              type={type}
              required={required}
              name={name}
              className="input"
              placeholder={placeholder}
              onChange={onChange}
            />
        }
      </div >
    </>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  position: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number
};

export default TextInput;
