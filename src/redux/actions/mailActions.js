import { server } from '@src/utils';
import * as types from './actionTypes';
import navigate from './navActions';

export const getSingleMail = active => {
  return { type: types.GET_SINGLE_MAIL, active }
}

export const getInbox = activeNav => {
  return async (dispatch) => {
    dispatch(navigate(activeNav));
    return server('messages', 'GET', {}).then(res =>
      dispatch({ type: types.GET_MAILS, messages: res })
    ).catch(err =>
      dispatch({ type: types.GET_MAILS, messages: err })
    )
  }
}

export const getMails = activeNav => {
  return async (dispatch) => {
    dispatch(navigate(activeNav));
    return server('messages/all', 'GET', {}).then(res =>
      dispatch({ type: types.GET_MAILS, messages: res })
    ).catch(err =>
      dispatch({ type: types.GET_MAILS, messages: err })
    )
  }
}

export const getUnread = activeNav => {
  return async (dispatch) => {
    dispatch(navigate(activeNav));
    return server('messages/unread', 'GET', {}).then(res =>
      dispatch({ type: types.GET_MAILS, messages: res })
    ).catch(err =>
      dispatch({ type: types.GET_MAILS, messages: err })
    )
  }
}

export const getSent = activeNav => {
  return (dispatch) => {
    dispatch(navigate(activeNav));
    return server('messages/sent', 'GET', {}).then(res =>
      dispatch({ type: types.GET_MAILS, messages: res })
    ).catch(err =>
      dispatch({ type: types.GET_MAILS, messages: err })
    )
  }
}

export const getDraft = activeNav => {
  return async (dispatch) => {
    dispatch(navigate(activeNav));
    return server('messages/draft', 'GET', {}).then(res =>
      dispatch({ type: types.GET_MAILS, messages: res })
    ).catch(err =>
      dispatch({ type: types.GET_MAILS, messages: err })
    )
  }
}
