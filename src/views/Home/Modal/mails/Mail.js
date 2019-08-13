import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import TextInput from '@components/Inputs/TextInput';
import RadioInput from '@components/Inputs/RadioInput';
import SubmitBtn from '@components/ActionBtn';
import callToast from '@components/Toast';
import { sendMail, clearResponse, saveMail } from "@redux/actions/mailActions";
import { addMailInputs as inputs } from './inputs';


// eslint-disable-next-line import/prefer-default-export
export const NewMailModal = ({ response, sendMail, clearResponse, saveMail }) => {
  React.useEffect(() => {
    if (response.error) callToast(response.error, 'error');
    else if (response.message) callToast(response.message, 'success');
    clearResponse();
  }, [response])


  const [values, setValues] = React.useState({
    msgTo: 'stranger'
  });

  const [sendSaving, setSendSaving] = React.useState(false);
  const [draftSaving, setDraftSaving] = React.useState(false);

  const handleSubmit = async (event, save, thunk) => {
    event.preventDefault();
    save(true);
    const newValues = (({ msgTo, ...rest }) => rest)(values);
    console.log(newValues);
    thunk(newValues, () => {
      save(false);
    });
  }

  const handleChange = e => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  return (
    <div className="new-mail">
      <header>
        <h2>New mail</h2>
      </header>
      <form className="form-hd" onSubmit={handleSubmit} autoComplete="off">
        <div className="contactOptions lg:my-12 my-8">
          {
            inputs.radio.map((inp, index) => (
              <RadioInput
                {...inp}
                key={index}
                checked={values[inp.name] === inp.value}
                name={inp.name}
                onChange={handleChange}
              />
            ))
          }
        </div>
        <div className="lg:w-3/4 w-4/5 mx-auto">
          {
            inputs.text.map((inp, index) => (
              <TextInput
                {...inp}
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
              className="sendBtn"
              title="send"
              disabled={draftSaving || sendSaving}
              onClick={e => handleSubmit(e, setSendSaving, sendMail)}
              saving={sendSaving}
            />
          </span>
          <span>
            <SubmitBtn
              className="sendBtn"
              title="save"
              disabled={draftSaving || sendSaving}
              onClick={e => handleSubmit(e, setDraftSaving, saveMail)}
              saving={draftSaving}
            />
          </span>
        </div>
      </form>
    </div >

  );
};

NewMailModal.propTypes = {
  handleChange: PropTypes.func
};

function mapStateToProps(state) {
  return {
    response: state.mails.response,
  }
}

const matchDispatchToProps = { sendMail, clearResponse, saveMail }

export default connect(mapStateToProps, matchDispatchToProps)(NewMailModal);