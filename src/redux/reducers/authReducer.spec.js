import * as actions from '@redux/actions/authActions';
import authReducer from './authReducer';

const initialState = {
  logIn: { res: 'hello' },
  signUp: { res: 'welcome' },
};

describe('REDUCERS TEST', () => {
  it('should sign UP user when SIGN_UP action is passed', () => {
    const signUpState = { signUp: { res: 'you are new' } };
    const action = actions.signUp(signUpState);

    const newState = authReducer(initialState, action);
    expect(newState.signUp).toEqual(signUpState.signUp);
  })

  it('should login user when LOG_IN action is passed', () => {
    const logInState = { logIn: { res: 'I know you' } };

    const action = actions.logIn(logInState);

    const newState = authReducer(initialState, action);
    expect(newState.logIn).toEqual(logInState.logIn);
  })
})
