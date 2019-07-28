import * as types from './actionTypes';
import { server, storeUser } from '../../utils';

export function signUp(signUp) {
  return { type: types.SIGN_UP, signUp }
}

export function logIn(logIn) {
  return { type: types.LOG_IN, logIn }
}

export function signUpUser(user, cb) {
  return (dispatch) => {
    return server(
      'auth/signup',
      'POST',
      user
    ).then((res) => {
      cb(res);
      dispatch(signUp(res))
    }).catch((err) => {
      cb(err);
      dispatch(signUp(err))
    })
  }
}

export function logInUser(user, cb) {
  return (dispatch) => {
    return server(
      'auth/login',
      'POST',
      user
    ).then((res) => {
      cb(res);
      dispatch(logIn(res))
    }).catch((err) => {
      cb(err);
      dispatch(logIn(err))
    })
  }
}
