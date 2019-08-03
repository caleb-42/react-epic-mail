import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Form from "../../../components/Forms/AuthForm";
import Nav from "../../../components/NavBar";
import "../index.scss";
import Footer from "../../../components/Footer";
import { logInUser } from "../../../redux/actions/authActions";

export const LogIn = ({ history, logInUser, auth }) => {
  const [user, setUser] = useState({});
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    logInUser(user, (res) => {
      setSaving(false);
      if (res.data) history.push('/home');
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <div className="auth">
      <Nav className="block w-full" />
      <div className="logIn flexdiv">
        <Form
          error={auth.error}
          header='Log In'
          button='Sign In'
          saving={saving}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          inputs={[
            {
              placeholder: "username@epicmail.com",
              name: "email",
              type: "email",
              label: "Email"
            },
            {
              name: "password",
              type: "password",
              label: "Password"
            }
          ]}
        />
      </div>
      <Footer className="absolute bottom-0" />
    </div>
  );
}

LogIn.propTypes = {
  history: PropTypes.object,
  logInUser: PropTypes.func,
  props: PropTypes.object,
  auth: PropTypes.object,
  error: PropTypes.string,
  saving: PropTypes.bool
}

function mapStateToProps(state) {
  return {
    auth: state.auth.logIn
  }
}

const matchDispatchToProps = { logInUser }

export default connect(mapStateToProps, matchDispatchToProps)(LogIn);