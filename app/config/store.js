import { applyMiddleware, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { rootLogic, rootReducer } from '../logic';
import { NavigationActions } from 'react-navigation';
import httpClient from './http-client';

const logic = createLogicMiddleware(rootLogic, {
  httpClient,
  navigate: NavigationActions.navigate,
});

const middlewares = [logic];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  middlewares.push(createLogger({ collapsed: true }));
}

export default createStore(rootReducer, applyMiddleware(...middlewares));
