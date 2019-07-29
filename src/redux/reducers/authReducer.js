import * as types from '../actions/actionTypes';
import { auth } from './initialState';

export default function authReducer(state = auth, action) {
  switch (action.type) {
    case types.SIGN_UP:
      return { ...state, signUp: action.signUp };
    case types.LOG_IN:
      return { ...state, logIn: action.logIn };
    default:
      return state;
  }
}