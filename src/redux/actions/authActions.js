import * as types from './actionTypes';
import { server, storeUser } from '../../utils';

export function signUp(signUp) {
  return { type: types.SIGN_UP, signUp }
}

export function signUpUser(user, cb) {
  return (dispatch) => {
    return server(
      'auth/signup',
      'POST',
      user,
      (res) => {
        cb(res);
        dispatch(signUp(res))
      }, (err) => {
        cb(err);
        dispatch(signUp(err))
      }
    )
  }
}
