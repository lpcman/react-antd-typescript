import { connectRouter, routerMiddleware } from 'connected-react-router'
import createBrowserHistory from "history/createBrowserHistory"
import {applyMiddleware, compose, createStore} from 'redux';
import logger from 'redux-logger';
import reduers from '../reducers/'
import initialState from './store'

export const history = createBrowserHistory();
const enhancers: any[] = [];
const middleware = [logger, routerMiddleware(history)];

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  connectRouter(history)(reduers), // new root reducer with router state
  initialState,
  composeEnhancer(applyMiddleware(...middleware), ...enhancers)
);

export default store;
