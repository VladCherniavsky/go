import {combineReducers} from 'redux';
import userReducer from './userReducer';
import authCheckReducer from './authCheckReducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authCheckReducer
});

export default rootReducer;
