import React from 'react';
import PropTypes from 'prop-types';

const inputs = {
  radio: [

  ],
  text: [

  ],
  check: [

  ]
}

const GroupModal = () => (
  {/* <div class="custom-modal modal anim newGroupModal ovflo-y" id="newGroupModal" data-action="creategroup">
    <div class="modal-content">
      <a class="modal_close">&times;</a>
      <h2 class="modal_heading">New Group</h2>
      <div class="modal-body">
        <form class="form-hd text-center " action="" autocomplete="off">
          <div class="input-group text-center">
            <label for="name" class="name anim ">Group Name</label>
            <input required type="text" id="name" class="inputs" placeholder="Group Name" name="name" />
          </div>
          <div class="input-group text-center">
            <label for="name" class="name anim ">New Group Name</label>
            <input required type="text" id="name" class="inputs" placeholder="New Group Name" name="newname" />
          </div>
          <h4 class="mail-resp res opac-70">&nbsp;</h4>
          <div class="loader gone"></div>
          <div class="groupactionbtn horizon-spread">
            <button modal-class="newGroupModal" type="button" class="wht actionGroup edit anim">edit group</button>
            <button modal-class="newGroupModal" type="button" class="wht actionGroup create anim">create group</button>
          </div>

        </form>
      </div>
    </div>
  </div> */}
);

GroupModal.propTypes = {
  mails: PropTypes.array
}

export default GroupModal;