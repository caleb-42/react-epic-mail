import * as types from '../actions/actionTypes'

export default function mailReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_MAIL:
      return [...state, ...action.mail];
    default:
      return state;
  }
}