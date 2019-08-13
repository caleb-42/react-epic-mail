import * as types from './actionTypes'

export const navigate = (activeNav) => {
  return { type: types.NAVIGATE, activeNav };
}

export const toggleNavigation = (open) => {
  return { type: types.TOGGLE_NAVIGATION, open };
}
