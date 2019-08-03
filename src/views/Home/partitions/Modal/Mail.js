import React from 'react';
import PropTypes from 'prop-types';

const MailModal = ({ inputs = [] }) => (
  {/* <div className="custom-modal modal anim newMailModal ovflo-y" id="newMailModal" data-action="send">
   <div className="modal-content">
      <a className="modal_close">&times;</a>
      <h2 className="modal_heading">New Mail</h2>
      <div className="modal-body">
        <form className="form-hd text-center " action="" autocomplete="off">
          <div className="msgToCon contactOptions horizon-spread">
            <span className="stranger">
              <input modal-className="newMailModal" checked type="radio" name="msgto" value="stranger" id="stranger" />
              <label for="stranger" className="f-15 ml-2">Stranger</label>
            </span>
            <span className="contact">
              <input modal-className="newMailModal" type="radio" name="msgto" value="contact" id="contact" />
              <label for="contact" className="f-15 ml-2">Contact</label>
            </span>
            <span className="group">
              <input modal-className="newMailModal" type="radio" name="msgto" value="group" id="group" />
              <label for="group" className="f-15 ml-2">Group</label>
            </span>
          </div>
          <div className="input-group text-center">
            <label for="email" className="email anim ">Receiver</label>
            <input required type="text" id="email" className="inputs" placeholder="Email" name="email" />
          </div>
          <div className="input-group text-center">
            <label for="subject" className="subject anim ">Subject</label>
            <input required type="text" id="subject" className="inputs" placeholder="Subject" name="subject" />
          </div>
          <div className="input-group text-center">
            <label for="message" className="message anim ">Message</label>
            <textarea rows= 8 required type="message" id="message" className="inputs" placeholder = "Message" name="message"></textarea>
                        </div>
        <div className="text-center smsSend">
          <input type="checkbox" name="sendsms" value= true id="sms" />
          <label for="sms" className="f-15 ml-2">Send SMS</label>
        </div>
        <div className="actionbtn horizon-spread">
          <button modal-class="newMailModal" type="button" className="wht actionMail save anim">save</button>
          <button modal-class="newMailModal" type="button" className="wht actionMail update anim">update</button>
          <button modal-class="newMailModal" type="button" className="wht actionMail send anim">send</button>
          <button modal-class="newMailModal" type="button" className="wht actionMail reply anim">reply</button>
        </div>
        <h4 className="mail-resp res opac-70">&nbsp;</h4>
        <div className="loader gone"></div>
                    </form>
    </div>
  </div> */}
);

MailModal.propTypes = {
  mails: PropTypes.array
}

export default MailModal;