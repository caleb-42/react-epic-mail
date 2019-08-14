import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-responsive-modal';
import NewMail from './mails/NewMail';
import UpdateMail from './mails/UpdateMail';
import './index.scss';

const Modal = ({ payload, open, onCloseModal }) => {
  const modal = () => {
    switch (payload.kind) {
      case 'newMail':
        return <NewMail />;
      case 'updateMail':
        return <UpdateMail data={payload.data} />;
      default:
        return <NewMail />;
    }
  }
  return (
    <ReactModal
      open={open}
      onClose={onCloseModal}
      center
      classNames={{
        modal: 'customModal lg:w-2/4 lg:h-11/12 w-full h-full',
      }}
    >
      <div className="modal">{modal()}</div>
    </ReactModal>
  );
};

Modal.propTypes = {
  payload: PropTypes.shape({ kind: PropTypes.string }),
  open: PropTypes.bool,
  onCloseModal: PropTypes.func,
}

export default Modal;
