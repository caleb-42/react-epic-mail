import * as types from '../actions/actionTypes';
import { mails } from './initialState';

export default function mailReducer(state = mails, action) {
  switch (action.type) {
    case types.CREATE_MAIL:
      return [...state, ...action.mail];
    default:
      return state;
  }
}