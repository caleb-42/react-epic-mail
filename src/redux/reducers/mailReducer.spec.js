import * as types from '@redux/actions/actionTypes';
import mailReducer from './mailReducer';
import { mails } from './initialState';

describe('REDUCERS TEST', () => {
  it('should send draft mail when SEND_DRAFT_MAIL action is passed', () => {
    const action = {
      type: types.SEND_DRAFT_MAIL, messages: {
        data: 'hello'
      }
    };

    const newState = mailReducer(mails, action);
    expect(newState).toEqual({ ...mails, response: action.messages });
  })
  it('should update mail when UPDATE_MAIL action is passed', () => {
    const action = {
      type: types.UPDATE_MAIL, messages: {
        data: 'hello'
      }
    };

    const newState = mailReducer(mails, action);
  });
  it('should delete mail when DELETE_MAIL action is passed', () => {
    const action = {
      type: types.DELETE_MAIL, messages: {
        data: 'hello'
      }
    };

    const newState = mailReducer(mails, action);
    expect(newState).toEqual({ ...mails, response: action.messages });
  })
  it('should save mail when DRAFT_MAIL action is passed', () => {
    const action = {
      type: types.DRAFT_MAIL, messages: {
        data: 'hello'
      }
    };

    const newState = mailReducer(mails, action);
    expect(newState).toEqual({ ...mails, response: action.messages });
  })
  it('should send mail when SEND_MAIL action is passed', () => {
    const action = {
      type: types.SEND_MAIL, messages: {
        data: 'hello'
      }
    };

    const newState = mailReducer(mails, action);
    expect(newState).toEqual({ ...mails, response: action.messages });
  })
  it('should get mail when GET_MAILS action is passed', () => {
    const action = {
      type: types.GET_MAILS, messages: {
        data: 'hello'
      }
    };

    const newState = mailReducer(mails, action);
    expect(newState).toEqual({
      ...mails,
      messages: action.messages,
      loading: false
    });
  })
  it('should get single mail when GET_SINGLE_MAIL action is passed', () => {
    const action = {
      type: types.GET_SINGLE_MAIL, active: {
        data: 'hello'
      }
    };

    const newState = mailReducer(mails, action);
    expect(newState).toEqual({
      ...mails,
      active: action.active,
      loading: false
    });
  })
  it('should clear mail when CLEAR_MAIL action is passed', () => {
    const action = {
      type: types.CLEAR_MAIL, messages: {
        data: 'hello'
      }
    };

    const newState = mailReducer(mails, action);
    expect(newState).toEqual({
      ...mails,
      messages: {},
      loading: true
    });
  })
  it('should clear mail when CLEAR_MAIL_RESPONSE action is passed', () => {
    const action = {
      type: types.CLEAR_MAIL_RESPONSE, messages: {
        data: 'hello'
      }
    };

    const newState = mailReducer(mails, action);
    expect(newState).toEqual({
      ...mails
    });
  })
  it('should clear mail when CLEAR_ACTIVE_MAIL action is passed', () => {
    const action = {
      type: types.CLEAR_ACTIVE_MAIL, messages: {
        data: 'hello'
      }
    };

    const newState = mailReducer(mails, action);
    expect(newState).toEqual({
      ...mails,
      subLoading: true
    });
  })
});
