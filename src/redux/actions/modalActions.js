import * as types from './actionTypes'

export const toggleModal = (data) => {
  return { type: types.TOGGLE_MODAL, data };
}
