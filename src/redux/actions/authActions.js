import { server, storeUser } from '@src/utils';
import * as types from './actionTypes';

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
      if (res.data) storeUser(res.data);
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
      if (res.data) storeUser(res.data);
      dispatch(logIn(res))
    }).catch((err) => {
      cb(err);
      dispatch(logIn(err))
    })
  }
}
