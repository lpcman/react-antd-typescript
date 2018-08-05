import { combineReducers } from 'redux'
import {enthusiasm} from './helloReducer';
import {enthusiasm as e} from './hiReducer';
import locales from './localesReducer';

export default combineReducers({
    hello: enthusiasm,
    hi: e,
    locales
});
