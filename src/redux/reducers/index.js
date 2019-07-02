import { combineReducers } from 'redux';
import mail from './mailReducer';

const rootReducer = combineReducers({ mail });
export default rootReducer;