import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Form from './index'

const renderSignUpForm = (args) => {
  const defaultProps = {
    error: '',
    saving: false,
    button: 'Register',
    header: 'Sign Up',
    inputs: [
      {
        name: 'email',
        placeholder: 'username@epicmail.com',
        label: 'Email',
        type: 'email'
      }
    ],
    handleChange: () => { },
    handleSubmit: () => { }
  }
  const props = { ...defaultProps, ...args };
  return render(<Form {...props} />)
}

describe('AUTH FORM', () => {

  afterEach(cleanup);

  describe('COMPONENT TEST', () => {
    it("Should contain Sign up header", () => {
      const { getByText } = renderSignUpForm();
      getByText('Register');
    });
    it("Should have submit button display Register by default", () => {
      const { getByText } = renderSignUpForm();
      getByText('Register');
    });
    it("Should have submit button display Loading on form submit", () => {
      const { getByText } = renderSignUpForm({ saving: true });
      getByText('Loading');
    });
  });
});
