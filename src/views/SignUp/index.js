import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Form from "./Form";
import Nav from "../../components/NavBar";
import "./index.scss";
import Footer from "../../components/Footer";
import { signUpUser } from "../../redux/actions/authActions";

const SignUp = ({ history, signUpUser, auth }) => {
  const [user, setUser] = useState({});
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    signUpUser(user, (res) => {
      setSaving(false);
      if (res.data) history.push('/home');
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <React.Fragment>
      <Nav className="block w-full" />
      <div className="signUp flexdiv">
        <Form
          error={auth.error}
          saving={saving}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <Footer className="absolute bottom-0" />
    </React.Fragment>
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