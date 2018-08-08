import {applyMiddleware, compose, createStore} from 'redux';
import logger from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createBrowserHistory from "history/createBrowserHistory"
import createSagaMiddleware from 'redux-saga';
import {initialState} from './store';
import rootSaga from '../sagas';
import * as reduers from '../reducers/';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const enhancers: any[] = [];
const middleware = [logger, routerMiddleware(history), sagaMiddleware];

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  connectRouter(history)(reduers.reducers), // new root reducer with router state
  initialState,
  composeEnhancer(applyMiddleware(...middleware), ...enhancers)
);

// We run the root sagas automatically
sagaMiddleware.run(rootSaga);

export default store;
