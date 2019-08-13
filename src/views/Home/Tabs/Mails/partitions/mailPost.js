import React from 'react';
import PropTypes from 'prop-types';

const mailPost = ({ mail, index, click, className }) => {
  return (
    <div onClick={click} id={`post-${index}`} className={`post ${className} anim`}>
      <div className="postPic"></div>
      <div className="details">
        <h4 className="name">{`${mail.firstname} ${mail.lastname}`}</h4>
        <p className="subject">{mail.subject}</p>
        <div className="meta"><span className="status">{mail.status}</span><span className="timestamp">{mail.senttime}</span></div>
      </div>
    </div>
  );
};

mailPost.propTypes = {
  mail: PropTypes.object,
  index: PropTypes.number,
  click: PropTypes.func,
  className: PropTypes.string,
}

export default mailPost;