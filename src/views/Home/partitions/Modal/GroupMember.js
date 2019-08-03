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
  {/* <div class="custom-modal modal anim newGroupMemberModal ovflo-y" id="newGroupMemberModal" data-action="creategroupmember">
      <div class="modal-content">
        <a class="modal_close">&times;</a>
        <h2 class="modal_heading">Add Member to Group</h2>
        <div class="modal-body">
          <form class="form-hd text-center " action="" autocomplete="off">
            <div class="contactOptions horizon-spread">
              <span class="stranger">
                <input modal-class="newGroupMemberModal" checked type="radio" name="memberOption" value="stranger" id="strangers" />
                <label for="strangers" class="f-15 ml-2">Stranger</label>
              </span>
              <span class="contact">
                <input modal-class="newGroupMemberModal" type="radio" name="memberOption" value="contact" id="contacts" />
                <label for="contacts" class="f-15 ml-2">Contact</label>
              </span>
            </div>
            <div class="input-group text-center">
              <label for="email" class="email anim ">Email</label>
              <input required type="text" id="email" class="inputs" placeholder="Email" name="email" />
            </div>
            <h4 class="mail-resp res opac-70">&nbsp;</h4>
            <div class="loader gone"></div>
            <div class="groupmemberactionbtn horizon-spread">
              <button modal-class="newGroupMemberModal" type="button" class="wht actionGroupMember add anim">add user</button>
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