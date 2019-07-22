import * as types from '../actions/actionTypes';
import { signUp } from './initialValyes';

export default function authReducer(state = signUp, action) {
  switch (action.type) {
    case types.SIGN_UP:
      return { ...state, ...action.signUp };
    default:
      return state;
  }
}