import { server, storeUser, getUser as extractUser } from '@utils';
import * as types from './actionTypes';

export function signUp(signUp) {
  return { type: types.SIGN_UP, signUp }
}

export const signOut = () => {
  return async (dispatch) => {
    storeUser({});
    dispatch({ type: types.SIGN_OUT, auth: { isAuthenticated: false, user: {} } });
  }
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
      console.log(res);
      const action = { signUp: res, isAuthenticated: false };
      if (res.data) {
        action.signUp = res.data[0];
        action.isAuthenticated = true;
        storeUser(res.data);
      }
      dispatch(signUp(action))
    }).catch((err) => {
      cb(err);
      dispatch(signUp({ signUp: err, isAuthenticated: false }))
    })
  }
}

export const getUser = () => (dispatch) => {
  let user = extractUser() || {};
  if (user.token) {
    if (user.token) dispatch(setUpUser({ user, isAuthenticated: true }));
  } else dispatch(setUpUser({ isAuthenticated: false }));
};

export function logInUser(user, cb) {
  return (dispatch) => {
    return server(
      'auth/login',
      'POST',
      user
    ).then((res) => {
      cb(res);
      const action = { logIn: res, isAuthenticated: false };
      if (res.data) {
        action.logIn = res.data[0];
        action.isAuthenticated = true
        storeUser(res.data);
      }
      dispatch(logIn(action));
    }).catch((err) => {
      cb(err);
      dispatch(logIn({ logIn: err, isAuthenticated: false }))
    })
  }
}
