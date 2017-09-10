import { createLogic } from 'redux-logic';
import qs from 'qs';

// Action Types
const FETCH = '@@app/recipes/FETCH';
const FETCH_SUCCESS = '@@app/recipes/FETCH_SUCCESS';
const FETCH_ERROR = '@@app/recipes/FETCH_ERROR';
const CANCEL = '@@app/recipes/CANCEL';

// Initial State
const initialState = {
  loading: false,
  list: [],
};

// Observables
const recipesFetchLogic = createLogic({
  type: FETCH,
  cancelType: CANCEL,
  processOptions: {
    successType: FETCH_SUCCESS,
    failType: FETCH_ERROR,
  },
  process({ action, httpClient }) {
    const { page, level } = action.payload;
    return httpClient.get(`/v1/recipes?page=${page}&level=${level}`);
  },
});

export const recipesLogic = [recipesFetchLogic];

// Selectors
export const selectRecipe = ({ recipes }, id) => {
  return recipes.list.find(item => item.id === id);
};

// Action Creators
export function recipesFetch(page = 1, level = 0) {
  return { type: FETCH, payload: { page, level } };
}

// Reducer
export default function recipeReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case FETCH:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        list: payload.data,
        loading: false,
      };

    default:
      return state;
  }
}
