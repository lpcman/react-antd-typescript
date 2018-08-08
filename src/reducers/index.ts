import {combineReducers} from 'redux'
import * as helloReducer from './helloReducer';
import * as hiReducer from './hiReducer';
import * as localesReducer from './localesReducer';
import * as authReducer from './authReducer';

export const reducers =  combineReducers({
  hello: helloReducer.helloReducer,
  hi: hiReducer.hiReducer,
  locales: localesReducer.default,
  auth: authReducer.default
});
