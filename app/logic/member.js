import { createLogic } from 'redux-logic';
import { NavigationActions } from 'react-navigation';

// Actions
const LOGIN = '@@app/member/LOGIN';
const LOGIN_ERROR = '@@app/member/LOGIN_ERROR';

const LOGOUT = '@@app/member/LOGOUT';
const LOGOUT_SUCCESS = '@@app/member/LOGOUT_SUCCESS';

const FETCH = '@@app/member/FETCH';
const FETCH_SUCCESS = '@@app/member/FETCH_SUCCESS';

const CANCEL = '@@app/member/CANCEL';

// Initial State
const initialState = {
  error: false,
  loading: false,
  message: '',
  data: {},
};

// Observables
const loginLogic = createLogic({
  type: LOGIN,
  cancelType: CANCEL,
  processOptions: {
    successType: FETCH,
    failType: LOGIN_ERROR,
  },
  process({ action, httpClient }) {
    return httpClient.post('/v1/login', action.payload);
  },
});

const logoutLogic = createLogic({
  type: LOGOUT,
  cancelType: CANCEL,
  processOptions: {
    successType: LOGOUT_SUCCESS,
    failType: LOGOUT_SUCCESS,
  },
  process({ httpClient }) {
    return httpClient.get('/v1/logout');
  },
});

const fetchLogic = createLogic({
  type: FETCH,
  cancelType: CANCEL,
  processOptions: {
    successType: FETCH_SUCCESS,
    failType: LOGOUT_SUCCESS,
  },
  process({ httpClient }) {
    return httpClient.get('/v1/members/summary').then(summary => {
      return httpClient.get(`/v1/members/${summary.data.id}`).then(member => {
        return { ...summary.data, ...member.data };
      });
    });
  },
});

const redirectLogic = createLogic({
  type: [FETCH_SUCCESS, LOGOUT_SUCCESS],
  process({ action, navigate }, dispatch, done) {
    const { payload, type } = action;

    const navigateTo = routeName => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })],
      });

      dispatch(resetAction);
    };

    switch (type) {
      case FETCH_SUCCESS: {
        navigateTo('Tabs');
        break;
      }

      case LOGOUT_SUCCESS: {
        navigateTo('SignIn');
        break;
      }
    }

    done();
  },
});

export const memberLogic = [loginLogic, logoutLogic, fetchLogic];

// Selectors
export function selectMember(state) {
  return state.member.data;
}

// Action Creators
export function memberLogin(email, password) {
  return { type: LOGIN, payload: { email, password } };
}

export function memberLogout() {
  return { type: LOGOUT };
}

export function memberLogoutSuccess() {
  return { type: LOGOUT_SUCCESS };
}

export function memberFetch() {
  return { type: FETCH };
}

// Reducer
export default function memberReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
    case LOGOUT:
    case FETCH:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        message: '',
        data: payload,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: 'Incorrect email or password.',
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
}
