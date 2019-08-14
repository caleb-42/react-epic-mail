import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Settings = ({ user = {} }) => (
  <div className="settings tab anim gone">
    <div className="left-body anim-ease tab-content w-100 flexdiv flex-center">
      <div className="content-wrapper">
        <div className="dp-image mx-auto">
          <img className="text-center userdp" src="./UI-elements/dp.png" />
          <form className="dpForm">
            <input onChange={() => { }} type="file" name="userDp" className="gone uploaddp" />
          </form>
          <div className="actionupload horizon-spread">
            <button className="btn uploader">Upload</button>
            <button onClick={() => { }} className="btn savedp">Save</button>
          </div>
          <p className="opac-70 dpname">Size: (512px x 512px) Limit: 5mb</p>
          <div className="loader gone"></div>
          <div className="mx-auto userDetails">
            <h2>Your Details</h2>
            <p className="opac-70 userEmail">{user.username}</p>
            <p className="opac-70 userPhone">{user.phone}</p>
            <p className="opac-70 userRecoveryEmail">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="clr"></div>
  </div>
);

Settings.propTypes = {
  user: PropTypes.object
}

export default Settings;