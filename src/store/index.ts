import { connectRouter, routerMiddleware } from 'connected-react-router'
import createBrowserHistory from "history/createBrowserHistory"
import {applyMiddleware, compose, createStore} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reduers from '../reducers/';
import initialState from './store';
import rootSaga from '../sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const enhancers: any[] = [];
const middleware = [logger, routerMiddleware(history), sagaMiddleware];

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  connectRouter(history)(reduers), // new root reducer with router state
  initialState as any,
  composeEnhancer(applyMiddleware(...middleware), ...enhancers)
);

// We run the root sagas automatically
sagaMiddleware.run(rootSaga);

export default store;
