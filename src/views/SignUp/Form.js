import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/Form/TextInput';

const FormApp = ({ handleChange, handleSubmit, error = '', saving }) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="flexcenter inset-0 min-h-4/6 rounded-lg w-5/12 m-auto p-8">
      <h3 className="text-center text-white text-3xl font-semibold">Sign Up</h3>

      <div className="px-10 my-10">

        <TextInput
          placeholder="username@epicmail.com"
          name="email"
          type="email"
          onChange={handleChange}
          label="Email" />

        <TextInput
          name="recoveryEmail"
          type="email"
          onChange={handleChange}
          label="Recovery Email" />

        <TextInput
          name="password"
          type="password"
          onChange={handleChange}
          label="Password" />

        <TextInput
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          label="Confirm Password" />

      </div>
      <p className="text-center block mx-auto text-white font-semibold my-2">{error}</p>
      <button type="submit" disabled={saving} className="px-8 py-3 shadow-lg text-center block mx-auto mt-4 text-yellow-800 font-semibold bg-yellow-500 rounded-lg">{saving ? 'Loading' : 'Register'}</button>
    </form>
  );
};

FormApp.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  error: PropTypes.string,
  saving: PropTypes.bool
}

export default FormApp;