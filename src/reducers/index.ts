import {combineReducers} from 'redux'
import {enthusiasm} from './helloReducer';
import {enthusiasm as e} from './hiReducer';
import locales from './localesReducer';
import auth from './auth';

export default combineReducers({
  hello: enthusiasm,
  hi: e,
  locales,
  auth
});
