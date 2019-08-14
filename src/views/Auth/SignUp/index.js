import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Form from "@components/Forms/AuthForm";
import Nav from "@components/NavBar";
import "../index.scss";
import Footer from "@components/Footer";
import { signUpUser } from "@redux/actions/authActions";

export const SignUp = ({ history, signUpUser, auth }) => {
  const [user, setUser] = useState({});
  const [saving, setSaving] = useState(false);

  const signUp = auth.signUp;

  if (auth.isAuthenticated) history.push('/home');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    signUpUser(user, () => {
      setSaving(false);
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <div className="auth">
      <Nav className="block w-full" />
      <div className="signUp flexdiv">
        <Form
          error={signUp.error}
          header='Sign Up'
          button='Register'
          saving={saving}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          inputs={[
            {
              name: "firstName",
              type: "text",
              label: "First Name"
            },
            {
              name: "lastName",
              type: "text",
              label: "Last Name"
            },
            {
              placeholder: "username@epicmail.com",
              name: "email",
              type: "email",
              label: "Email"
            },
            {
              name: "recoveryEmail",
              type: "email",
              label: "Recovery Email"
            },
            {
              name: "password",
              type: "password",
              label: "Password"
            },
            {
              name: "confirmPassword",
              type: "password",
              label: "Confirm Password"
            }
          ]}
        />
      </div>
      <Footer className="absolute bottom-0" />
    </div>
  );
}

SignUp.propTypes = {
  history: PropTypes.object,
  signUpUser: PropTypes.func,
  props: PropTypes.object,
  auth: PropTypes.object,
  error: PropTypes.string,
  saving: PropTypes.bool
}

function mapStateToProps(state) {
  /* console.log(state); */
  return {
    auth: state.auth
  }
}

const matchDispatchToProps = { signUpUser }

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);