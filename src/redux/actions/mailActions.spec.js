import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mails } from '@redux/reducers/initialState';
import * as types from './actionTypes';
import * as mailActions from './mailActions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('ASYNC MAIL ACTIONS', () => {
  afterEach(() => {
    fetchMock.restore();
  })

  it('should send GET SINGLE MAIL API call when getting Single mail', () => {
    fetchMock.mock('*', {
      body: { data: ['12345'] },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: types.CLEAR_ACTIVE_MAIL
      },
      {
        type: types.GET_SINGLE_MAIL,
        active: {}
      }
    ];
    const store = mockStore({ mails });
    const res = mailActions.getSingleMail({});
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should send GET INBOX API call when getting inbox mail', () => {
    fetchMock.mock('*', {
      body: { data: ['12345'] },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: types.NAVIGATE,
        activeNav: {}
      },
      {
        type: types.CLEAR_MAIL
      },
      {
        type: types.GET_MAILS,
        messages: { data: ['12345'] }
      },
    ];
    const store = mockStore({ mails });
    const res = mailActions.getInbox({});
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should send GET MAILS API call when getting all mails', () => {
    fetchMock.mock('*', {
      body: { data: ['12345'] },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: types.NAVIGATE,
        activeNav: {}
      },
      {
        type: types.CLEAR_MAIL
      },
      {
        type: types.GET_MAILS,
        messages: { data: ['12345'] }
      },
    ];
    const store = mockStore({ mails });
    const res = mailActions.getMails({});
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should send GET_UNREAD API call when getting all unread mails', () => {
    fetchMock.mock('*', {
      body: { data: ['12345'] },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: types.NAVIGATE,
        activeNav: {}
      },
      {
        type: types.CLEAR_MAIL
      },
      {
        type: types.GET_MAILS,
        messages: { data: ['12345'] }
      },
    ];
    const store = mockStore({ mails });
    const res = mailActions.getUnread({});
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should send GET_SENT API call when getting all sent mails', () => {
    fetchMock.mock('*', {
      body: { data: ['12345'] },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: types.NAVIGATE,
        activeNav: {}
      },
      {
        type: types.CLEAR_MAIL
      },
      {
        type: types.GET_MAILS,
        messages: { data: ['12345'] }
      },
    ];
    const store = mockStore({ mails });
    const res = mailActions.getSent({});
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should send GET_DRAFT API call when getting all draft mails', () => {
    fetchMock.mock('*', {
      body: { data: ['12345'] },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: types.NAVIGATE,
        activeNav: {}
      },
      {
        type: types.CLEAR_MAIL
      },
      {
        type: types.GET_MAILS,
        messages: { data: ['12345'] }
      },
    ];
    const store = mockStore({ mails });
    const res = mailActions.getDraft({});
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should send SEND_MAIL API call when sending a mail', () => {
    fetchMock.mock('*', {
      body: { data: ['12345'] },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: types.SEND_MAIL,
        messages: {
          data: ['12345'],
          message: 'Message sent successfully'
        }
      },
    ];
    const store = mockStore({ mails });
    const res = mailActions.sendMail({}, () => { });
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should send SAVE_MAIL API call when saving a mail', () => {
    fetchMock.mock('*', {
      body: { data: ['12345'] },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: types.DRAFT_MAIL,
        messages: {
          data: ['12345'],
          message: 'Message saved successfully'
        }
      },
    ];
    const store = mockStore({ mails });
    const res = mailActions.saveMail({}, () => { });
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should send UPDATE_MAIL API call when updating a mail', () => {
    fetchMock.mock('*', {
      body: { data: ['12345'] },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: types.UPDATE_MAIL,
        messages: {
          data: ['12345'],
          message: 'Message updated successfully'
        }
      },
    ];
    const store = mockStore({ mails });
    const res = mailActions.updateMail({}, () => { });
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should send DELETE_MAIL API call when deleting a mail', () => {
    fetchMock.mock('*', {
      body: { data: ['12345'] },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: types.DELETE_MAIL,
        messages: {
          data: ['12345'],
          message: 'Message deleted successfully'
        }
      },
    ];
    const store = mockStore({ mails });
    const res = mailActions.deleteMail('deleted', {}, () => { });
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should send DRAFT_MAIL API call when sending a draft mail', () => {
    fetchMock.mock('*', {
      body: { data: ['12345'] },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: types.SEND_DRAFT_MAIL,
        messages: {
          data: ['12345'],
          message: 'Message sent successfully'
        }
      },
    ];
    const store = mockStore({ mails });
    const res = mailActions.sendDraftMail({}, () => { });
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })
})