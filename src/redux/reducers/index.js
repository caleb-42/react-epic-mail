import { combineReducers } from 'redux';
import mails from './mailReducer';
import auth from './authReducer';
import activeNav from './navReducer';

const rootReducer = combineReducers({
  mails,
  auth,
  activeNav
});
export default rootReducer;