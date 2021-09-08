import { combineReducers } from 'redux';
import user from './user';
import app from './app'

const rootReducer = combineReducers({ user, app });

export default rootReducer;
