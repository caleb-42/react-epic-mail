import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { auth } from '@redux/reducers/initialState';
import { storeUser } from '@utils';
import { SIGN_UP, LOG_IN, SETUP_USER } from './actionTypes';
import * as authActions from './authActions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('ASYNC AUTH ACTIONS', () => {
  afterEach(() => {
    fetchMock.restore();
  })

  it('should send LOG_IN API call when signing In user', () => {
    fetchMock.mock('*', {
      body: { data: '12345' },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: LOG_IN,
        logIn: { data: '12345' }
      }
    ];
    const store = mockStore({ auth });
    const res = authActions.logInUser({}, () => { });
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should carry out USER SETUP call after authenticating user', () => {

    const expectedActions = ['SETUP_USER'];
    storeUser({
      id: 1,
      name: 'ewere'
    });
    const store = mockStore({ auth });
    store.dispatch(authActions.getUser());
    const dispatchedActions = store.getActions();
    const actionTypes = dispatchedActions.map(action => action.type);
    expect(actionTypes).toEqual(expectedActions);
  })

  it('should call catch if LOG_IN API call fails when signing In user', () => {
    fetchMock.mock('*', 404, {
      body: { error: 'bad' },
      headers: { 'content-type': 'application/json' },
      throws: new TypeError('Failed to fetch')
    });
    const store = mockStore({ auth });
    const mockFn = jest.fn(() => { });
    const res = authActions.logInUser({}, mockFn);
    return store.dispatch(res).then(() => {
      expect(mockFn).toHaveBeenCalled();
    });
  })

  it('should send SIGN_UP API call when signing Up user', () => {
    fetchMock.mock('*', {
      body: { data: '12345' },
      headers: { 'content-type': 'application/json' }
    })
    const expectedAction = [
      {
        type: SIGN_UP,
        signUp: { data: '12345' }
      }
    ];
    const store = mockStore({ auth });
    const res = authActions.signUpUser({}, () => { });
    return store.dispatch(res).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should call catch if SIGN_UP API call fails when signing Up user', () => {
    fetchMock.mock('*', 404, {
      body: { error: 'bad' },
      headers: { 'content-type': 'application/json' },
      throws: new TypeError('Failed to fetch')
    });
    const store = mockStore({ auth });
    const mockFn = jest.fn(() => { });
    const res = authActions.signUpUser({}, mockFn);
    return store.dispatch(res).then(() => {
      expect(mockFn).toHaveBeenCalled();
    });
  })
})

describe('AUTH ACTIONS', () => {
  it('should create a LOG IN action', () => {
    const { logIn } = auth;
    const expectedAction = {
      type: LOG_IN,
      logIn
    };
    const action = authActions.logIn(logIn);
    expect(action).toEqual(expectedAction);
  })

  it('should create a SIGN UP action', () => {
    const { signUp } = auth;
    const expectedAction = {
      type: SIGN_UP,
      signUp
    };
    const action = authActions.signUp(signUp);
    expect(action).toEqual(expectedAction);
  })

  it('should create a SETUP USER action', () => {
    const { user } = auth;
    const expectedAction = {
      type: SETUP_USER,
      payload: user
    };
    const action = authActions.setUpUser(user);
    expect(action).toEqual(expectedAction);
  })
})