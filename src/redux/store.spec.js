import { createStore } from 'redux'
import rootReducer from './reducers';
import initialState from './reducers/initialState'
import * as actions from './actions/authActions';

describe('STORE TEST', () => {
  it('should handle login state', () => {
    const store = createStore(rootReducer, initialState);
    const logInState = { logIn: { res: 'I know you' } };

    const action = actions.logIn(logInState);

    store.dispatch(action);

    const auth = store.getState().auth;
    expect(auth.logIn).toEqual(logInState.logIn);
  })
})
