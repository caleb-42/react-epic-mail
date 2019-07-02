import * as types from './actionTypes'

export function createMail(mail) {
  return { type: types.CREATE_MAIL, mail }
};
