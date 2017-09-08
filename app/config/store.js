import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from '../logic';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  middlewares.push(createLogger({ collapsed: true }));
}

export default createStore(rootReducer, applyMiddleware(...middlewares));
