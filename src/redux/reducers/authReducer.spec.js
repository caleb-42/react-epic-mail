import * as actions from '@redux/actions/authActions';
import authReducer from './authReducer';

const initialState = {
  logIn: { res: 'hello' },
  signUp: { res: 'welcome' },
};

describe('REDUCERS TEST', () => {
  it('should sign UP user when SIGN_UP action is passed', () => {
    const signUp = { res: 'you are new' };
    const action = actions.signUp(signUp);

    const newState = authReducer(initialState, action);
    expect(newState.signUp).toEqual(signUp);
  })

  it('should login user when LOG_IN action is passed', () => {
    const logIn = { res: 'I know you' };

    const action = actions.logIn(logIn);

    const newState = authReducer(initialState, action);
    expect(newState.logIn).toEqual(logIn);
  })
})
