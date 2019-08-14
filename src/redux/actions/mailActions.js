import { server } from '@src/utils';
import * as types from './actionTypes';
import { navigate } from './navActions';

export const clearMail = () => {
  return { type: types.CLEAR_MAIL }
}

export const clearMailResponse = () => {
  return { type: types.CLEAR_MAIL_RESPONSE }
}

export const clearActiveMail = () => {
  return { type: types.CLEAR_ACTIVE_MAIL }
}

export const getSingleMail = active => {
  return async (dispatch) => {
    dispatch(clearActiveMail());
    dispatch({ type: types.GET_SINGLE_MAIL, active: active })
    return server(`messages/${active.id}`, 'GET', {})
  }
}

export const getInbox = activeNav => {
  return async (dispatch) => {
    dispatch(navigate(activeNav));
    dispatch(clearMail());
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
    dispatch(clearMail());
    return server('messages/all', 'GET', {}).then(res => {
      dispatch({ type: types.GET_MAILS, messages: res });
    }
    ).catch(err =>
      dispatch({ type: types.GET_MAILS, messages: err })
    )
  }
}

export const getUnread = activeNav => {
  return async (dispatch) => {
    dispatch(navigate(activeNav));
    dispatch(clearMail());
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
    dispatch(clearMail());
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
    dispatch(clearMail());
    return server('messages/draft', 'GET', {}).then(res =>
      dispatch({ type: types.GET_MAILS, messages: res })
    ).catch(err =>
      dispatch({ type: types.GET_MAILS, messages: err })
    )
  }
}

export const sendMail = (mail, cb) => {
  return async (dispatch) => {
    return server('messages', 'POST', mail).then(res => {
      cb();
      if (res.data) res.message = 'Message sent successfully'
      dispatch({ type: types.SEND_MAIL, messages: res })
    }
    ).catch(err => {
      cb();
      dispatch({ type: types.SEND_MAIL, messages: err });
    }
    )
  }
}

export const saveMail = (mail, cb) => {
  return async (dispatch) => {
    return server('messages/save', 'POST', mail).then(res => {
      cb();
      if (res.data) res.message = 'Message saved successfully'
      dispatch({ type: types.DRAFT_MAIL, messages: res })
    }
    ).catch(err => {
      cb();
      dispatch({ type: types.DRAFT_MAIL, messages: err });
    }
    )
  }
}

export const updateMail = (mail, cb) => {
  const id = mail.id;
  delete mail.id;
  return async (dispatch) => {
    return server(`messages/${id}`, 'PATCH', mail).then(res => {
      cb();
      if (res.data) res.message = 'Message updated successfully';
      dispatch({ type: types.UPDATE_MAIL, messages: res })
    }
    ).catch(err => {
      cb();
      dispatch({ type: types.UPDATE_MAIL, messages: err });
    }
    )
  }
}

export const deleteMail = (type, mail, cb) => {
  return async (dispatch) => {
    return server(`messages/${mail.id}`, 'DELETE').then(res => {
      cb();
      if (res.data) res.message = `Message ${type} successfully`;
      dispatch({ type: types.DELETE_MAIL, messages: res })
    }
    ).catch(err => {
      cb();
      dispatch({ type: types.DELETE_MAIL, messages: err });
    }
    )
  }
}

export const sendDraftMail = (mail, cb) => {
  return async (dispatch) => {
    return server(`messages/${mail.id}`, 'POST').then(res => {
      cb();
      if (res.data) res.message = `Message sent successfully`;
      dispatch({ type: types.SEND_DRAFT_MAIL, messages: res })
    }
    ).catch(err => {
      cb();
      dispatch({ type: types.SEND_DRAFT_MAIL, messages: err });
    }
    )
  }
}
