import React from 'react';
import PropTypes from 'prop-types';
import SubmitBtn from '@components/ActionBtn';

const MailPostBloated = ({ mail, user, mailAction, modalAction }) => {
  return !mail.email ? <div></div>
    : (
      <div className="post-bloated">
        <div className="postPic"></div>
        <h3 className="name">{`${mail.firstname} ${mail.lastname}`}</h3>
        <h5 className="email">{mail.email}</h5>
        <p className="subject">{mail.subject}</p>
        <div className="mailActionBtns mb-3">
          {
            user.id === mail.senderid &&
            <SubmitBtn
              className="updateMail"
              disabled={false}
              saving={false}
              onClick={() => modalAction.toggleModal({
                open: true,
                payload: {
                  kind: 'updateMail',
                  data: mail
                }
              })}
              title="Update"
            />
          }
        </div>
        <div className='bodyhead'>
          <span className="status">{mail.status}</span>
          <p className="timestamp">{mail.senttime}</p>
        </div>
        <div className="content">
          <p>{mail.message}</p>
        </div>
        <div className="mailActions">
          {/* 
          !((localStorage.getItem('id') === String(mail.senderid) && mail.status === 'read') || (localStorage.getItem('id') !== String(mail.senderid)))
          &&
          <Button
            label="Update"
            click={
              () => actions.updateMail(index)
            }
            color="text-white"
            bg="text-green-500"
          />
        }
        <Button
          label={mail.status !== 'unread' ? 'Delete' : 'Retract'}
          color="text-white"
          bg="text-green-500"
        />
        {
          localStorage.getItem('id') === String(mail.senderid) && mail.thread.length === 0 && mail.status !== 'draft'
          &&
          (mail.status === 'draft'
            ?
            < Button
              label='Send'
              color="text-white"
              bg="text-green-500"
            />
            :
            < Button
              label='Reply'
              color="text-white"
              bg="text-green-500"
            />)
         */}
        </div>
      </div>
    );
};

MailPostBloated.propTypes = {
  mail: PropTypes.object,
  actions: PropTypes.object
}

export default MailPostBloated;