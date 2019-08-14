import * as types from '@redux/actions/actionTypes';
import { auth } from './initialState';

export default function authReducer(state = auth, action) {
  console.log(action);
  switch (action.type) {
    case types.SIGN_OUT:
      return { ...state, ...action.auth }
    case types.SIGN_UP:
      return { ...state, ...action.signUp };
    case types.SETUP_USER:
      return {
        ...state,
        ...action.payload,
        isSettingAuth: false
      };
    case types.LOG_IN:
      return { ...state, ...action.logIn };
    default:
      return state;
  }
}