import { combineReducers } from 'redux';
import router from './router';

import member, { memberLogic } from './member';
import recipes, { recipesLogic } from './recipes';

// Combine logic
export const rootLogic = [...memberLogic, ...recipesLogic];

// Combine reducers
export const rootReducer = combineReducers({
  member,
  recipes,
  router,
});
