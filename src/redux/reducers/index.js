import { combineReducers } from 'redux';
import mails from './mailReducer';
import auth from './authReducer';
import activeNav from './navReducer';
import modal from './modalReducer';

const rootReducer = combineReducers({
  mails,
  auth,
  modal,
  activeNav
});
export default rootReducer;