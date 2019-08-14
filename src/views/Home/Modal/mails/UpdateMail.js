import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import TextInput from '@components/Inputs/TextInput';
import RadioInput from '@components/Inputs/RadioInput';
import SubmitBtn from '@components/ActionBtn';
import callToast from '@components/Toast';
import * as mailActions from "@redux/actions/mailActions";
import { addMailInputs as inputs } from './inputs';


// eslint-disable-next-line import/prefer-default-export
export const UpdateMailModal = ({ data, response, actions, activeNav }) => {
  React.useEffect(() => {
    if (response.error) callToast(response.error, 'error');
    else if (response.message) {
      callToast(response.message, 'success');
      const nav = activeNav.subMenu || activeNav.menu;
      actions[`get${nav}`](activeNav);
    }
    actions.clearMailResponse();
  }, [response])


  const [values, setValues] = React.useState({
    email: data.email,
    id: data.id,
    subject: data.subject,
    message: data.message,
    msgTo: 'stranger',
    sms: data.sms,
  });

  const [mailUpdating, setMailUpdating] = React.useState(false);

  const handleSubmit = async (event, update, thunk) => {
    event.preventDefault();
    update(true);
    const newValues = (({ msgTo, ...rest }) => rest)(values);
    console.log(newValues);

    thunk(newValues, () => {
      update(false);
    });
  }

  const handleChange = e => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  return (
    <div className="new-mail">
      <header>
        <h2>Update mail</h2>
      </header>
      <form className="form-hd" onSubmit={handleSubmit} autoComplete="off">
        <div className="contactOptions lg:my-12 my-8">
          {
            inputs.radio.map((inp, index) => {
              if (inp.value === 'group') return;
              return <RadioInput
                {...inp}
                key={index}
                checked={values[inp.name] === inp.value}
                name={inp.name}
                onChange={handleChange}
              />
            })
          }
        </div>
        <div className="lg:w-3/4 w-4/5 mx-auto">
          {
            inputs.text.map((inp, index) => (
              <TextInput
                {...inp}
                value={values[inp.name]}
                key={index}
                onChange={handleChange} />
            ))
          }
        </div>
        <div className="text-center smsSend">
          <input type="checkbox" name="sendsms" onChange={handleChange} value={true} id="sms" />
          <label htmlFor="sms" className="f-15 ml-2">Send SMS</label>
        </div>
        <div className="action">
          <span>
            <SubmitBtn
              className="updateBtn"
              title="Update"
              disabled={mailUpdating}
              onClick={e => handleSubmit(e, setMailUpdating, actions.updateMail)}
              saving={mailUpdating}
            />
          </span>
        </div>
      </form>
    </div >

  );
};

UpdateMailModal.propTypes = {
  handleChange: PropTypes.func
};

function mapStateToProps(state) {
  return {
    response: state.mails.response,
    activeNav: state.activeNav,
  }
}

const matchDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mailActions, dispatch)
})

export default connect(mapStateToProps, matchDispatchToProps)(UpdateMailModal);