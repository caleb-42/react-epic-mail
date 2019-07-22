import { combineReducers } from 'redux';
import mail from './mailReducer';
import auth from './authReducer';

const rootReducer = combineReducers({ mail, auth });
export default rootReducer;