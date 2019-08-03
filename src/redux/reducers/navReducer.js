import * as types from '@redux/actions/actionTypes';
import { activeNav } from './initialState'

export default function activeNavReducer(state = activeNav, action) {
  switch (action.type) {
    case types.NAVIGATE:
      return { ...action.activeNav }
    default:
      return { ...state }
  }
}