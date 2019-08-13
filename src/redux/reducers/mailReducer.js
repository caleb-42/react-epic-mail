import * as types from '@redux/actions/actionTypes';
import { mails } from './initialState';

export default function mailReducer(state = mails, action) {
  switch (action.type) {
    case types.DRAFT_MAIL:
      return { ...state, response: action.messages };
    case types.SEND_MAIL:
      return { ...state, response: action.messages };
    case types.GET_MAILS:
      return { ...state, messages: action.messages, loading: false };
    case types.GET_SINGLE_MAIL:
      return { ...state, active: action.active, loading: false };
    case types.CLEAR_MAIL:
      return { ...state, ...mails, messages: {}, loading: true };
    case types.CLEAR_RESPONSE:
      return { ...state, response: mails.response };
    default:
      return state;
  }
}