import React from 'react';
import PropType from 'prop-types';
import { Field } from 'formik';

const InputLabel = ({ label, type, placeholder, inputClass, contClass, labelClass }) => {
  return (
    <div className={contClass}>
      <label className={labelClass}>
        {label}
      </label >
      <Field name={name} className={inputClass} placeholder="hsa" type={type} />
    </div >
  );
};

InputLabel.propTypes = {
  inputClass: PropType.string,
  contClass: PropType.string,
  labelClass: PropType.string,
  placeholder: PropType.string,
  label: PropType.string.isRequired,
  type: PropType.string.isRequired,
}

export default InputLabel;