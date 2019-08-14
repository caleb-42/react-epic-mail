import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import Error from '@components/Error';
import Loader from '@components/Loader';
import callToast from '@components/Toast';
import * as mailActions from "@redux/actions/mailActions";
import * as modalActions from "@redux/actions/modalActions";
import Post from './partitions/mailPost';
import PostBloated from './partitions/mailPostBloated';
import './index.scss';

const Mails = ({ mails, mailAction, modalAction, user, activeNav }) => {
  const nav = activeNav.subMenu || activeNav.menu;
  const { response } = mails;

  React.useEffect(() => {
    mailAction.getInbox(activeNav);
  }, []);

  React.useEffect(() => {
    if (response.error) callToast(response.error, 'error');
    else if (response.message) {
      callToast(response.message, 'success');
      mailAction[`get${nav}`](activeNav);
      mailAction.clearMailResponse();
    }
  }, [response]);


  const data = mails.messages.data;
  const { active } = mails;

  const showMails = () => {
    if (mails.loading) return <Loader />
    else if (!data && !mails.loading) return <Error error={mails.messages.error} />;
    if (!data.length) return <Error error="Empty" />;
    return data.map((mail, index) => (
      <Post key={mail.id} index={index} className={`${active.id === mail.id ? 'active' : ''} ${active.id && active.id !== mail.id ? 'inactive' : ''}`} click={() => mailAction.getSingleMail(mail)} mail={mail} />
    ));
  }

  return (
    <div className={`mails tab anim ${active.id ? 'post-active' : ''}`}>
      <div className="left-body anim-ease tab-content">
        <div className="content-wrapper">
          {showMails()}
        </div>
      </div>
      <div className="right-body anim-ease tab-content">
        <div className="content-wrapper-bloated">
          <PostBloated user={user} modalAction={modalAction} mailAction={mailAction} mail={active} />
        </div>
      </div>
    </div>
  );
};

Mails.propTypes = {
  mails: PropTypes.object,
  mailAction: PropTypes.object,
  activeNav: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    mails: state.mails,
    activeNav: state.activeNav,
    user: state.auth.user,
  }
}

const matchDispatchToProps = (dispatch) => ({
  mailAction: bindActionCreators(mailActions, dispatch),
  modalAction: bindActionCreators(modalActions, dispatch)
})

export default connect(mapStateToProps, matchDispatchToProps)(Mails);