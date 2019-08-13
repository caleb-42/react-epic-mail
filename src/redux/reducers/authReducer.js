import * as types from '@redux/actions/actionTypes';
import { auth } from './initialState';

export default function authReducer(state = auth, action) {
  switch (action.type) {
    case types.SIGN_UP:
      return { ...state, signUp: action.signUp };
    case types.SETUP_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload },
      };
    case types.LOG_IN:
      return { ...state, logIn: action.logIn };
    default:
      return state;
  }
}