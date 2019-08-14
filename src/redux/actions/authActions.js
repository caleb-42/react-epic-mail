import { server, storeUser, getUser as extractUser } from '@src/utils';
import * as types from './actionTypes';

export function signUp(signUp) {
  return { type: types.SIGN_UP, signUp }
}

export const setUpUser = payload => ({ type: types.SETUP_USER, payload });

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

export const getUser = () => (dispatch) => {
  /* istanbul ignore next */
  if (localStorage.user) {
    let user = extractUser();
    dispatch(setUpUser(user));
  }
};

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
