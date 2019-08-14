import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Groups = ({ groups = [] }) => (

  <div className="groups tab anim gone">
    <div className="left-body anim-ease tab-content centercon recreate flexdiv flex-center">
      <button className="anim modalopen fw-600 btn newgroup" data-action="creategroup" data-modal="#newGroupModal">New group</button>
      <div className="content-wrapper">
        {
          groups.map(() => {

          })
        }
      </div>
    </div>
    <div className="right-body anim-ease tab-content display flexdiv flex-center centercon">
      <button className="anim modalopen fw-600 btn newgroupmember" data-action="creategroupmember" data-modal="#newGroupMemberModal">Add member</button>
      <div className="content-wrapper-bloated">

      </div>
    </div>
    <div className="clr"></div>
  </div>
);

Groups.propTypes = {
  groups: PropTypes.array
}

export default Groups;