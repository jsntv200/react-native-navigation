import { combineReducers } from 'redux';
import router from './router';

import auth, { authLogic } from './auth';
import recipes, { recipesLogic } from './recipes';

// Combine logic
export const rootLogic = [...authLogic, ...recipesLogic];

// Combine reducers
export const rootReducer = combineReducers({
  auth,
  recipes,
  router,
});
