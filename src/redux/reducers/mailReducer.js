import * as types from '@redux/actions/actionTypes';
import { mails } from './initialState';

export default function mailReducer(state = mails, action) {
  switch (action.type) {
    case types.GET_MAILS:
      return { ...state, messages: action.messages };
    case types.GET_SINGLE_MAIL:
      return { ...state, active: action.active };
    default:
      return state;
  }
}