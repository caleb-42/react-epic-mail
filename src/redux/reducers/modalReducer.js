import * as types from '@redux/actions/actionTypes';
import { modal } from './initialState'

export default function activeNavReducer(state = modal, action) {
  switch (action.type) {
    case types.TOGGLE_MODAL:
      return { ...state, ...action.data }
    default:
      return { ...state }
  }
}