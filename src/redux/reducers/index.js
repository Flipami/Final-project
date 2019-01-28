import { combineReducers } from 'redux'
import userReducer from './userReducers';
import jobReducer from './jobReducers';
import contactReducer from './jobReducers';

export default combineReducers({
  userReducer,
  jobReducer,
  contactReducer,
});