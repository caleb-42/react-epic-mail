import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import Error from '@components/Error';
import Loader from '@components/Loader';
import * as mailActions from "@redux/actions/mailActions";
import Post from './partitions/mailPost';
import PostBloated from './partitions/mailPostBloated';
import './index.scss';

const Mails = ({ mails, actions }) => {
  const data = mails.messages.data;
  const { active } = mails;

  const showMails = () => {
    if (mails.loading) return <Loader />
    else if (!data && !mails.loading) return <Error error={mails.messages.error} />;
    if (!data.length) return <Error error="Empty" />;
    return data.map((mail, index) => (
      <Post key={mail.id} index={index} className={`${active.id === mail.id ? 'active' : ''} ${active.id && active.id !== mail.id ? 'inactive' : ''}`} click={() => actions.getSingleMail(mail)} mail={mail} />
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
          <PostBloated actions={actions} mail={active} />
        </div>
      </div>
    </div>
  );
};

Mails.propTypes = {
  mails: PropTypes.object,
  actions: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    mails: state.mails,
  }
}

const matchDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mailActions, dispatch),
})

export default connect(mapStateToProps, matchDispatchToProps)(Mails);