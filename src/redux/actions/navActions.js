import * as types from './actionTypes'

export default function navigate(activeNav) {
  return { type: types.NAVIGATE, activeNav };
}
