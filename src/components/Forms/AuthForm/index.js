import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '@components/Inputs/TextInput';

const FormApp = ({ header, button, handleChange, handleSubmit, error = '', saving, inputs }) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="flexcenter inset-0 rounded-lg w-5/12 m-auto p-8">
      <h3 className="text-center text-white text-3xl font-semibold">{header}</h3>

      <div className="px-10 my-10">
        {inputs.map(({ required = true, placeholder, name, type, label }, index) => (
          <TextInput
            key={index}
            required={required}
            placeholder={placeholder}
            name={name}
            type={type}
            onChange={handleChange}
            label={label} />
        ))
        }
      </div>
      <p className="text-center block mx-auto font-medium text-white my-2 opacity-75">{error}</p>
      <button type="submit" disabled={saving} className="px-8 py-3 shadow-lg text-center block mx-auto mt-4 text-yellow-800 font-semibold bg-yellow-500 rounded-lg">{saving ? 'Loading' : button}</button>
    </form>
  );
};

FormApp.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  error: PropTypes.string,
  saving: PropTypes.bool,
  inputs: PropTypes.array,
  button: PropTypes.string,
  header: PropTypes.string,
}

export default FormApp;