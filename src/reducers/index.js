import { combineReducers } from 'redux';

import userReducer from './userReducers.js';

const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer;
