import { createLogic } from 'redux-logic';

// Actions
const LOGIN = '@@app/auth/LOGIN';
const LOGIN_SUCCESS = '@@app/auth/LOGIN_SUCCESS';
const LOGIN_ERROR = '@@app/auth/LOGIN_ERROR';

const LOGOUT = '@@app/auth/LOGOUT';
const LOGOUT_SUCCESS = '@@app/auth/LOGOUT_SUCCESS';
const CANCEL = '@@app/auth/CANCEL';

// Initial State
const initialState = {
  error: false,
  hasToken: false,
  loading: false,
  message: '',
};

// Observables
const loginLogic = createLogic({
  type: LOGIN,
  cancelType: CANCEL,
  processOptions: {
    successType: LOGIN_SUCCESS,
    failType: LOGIN_ERROR,
  },
  process({ action, httpClient }) {
    return httpClient
      .post('/v1/login', action.payload)
      .then(({ data }) => data);
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

const onSuccessLogic = createLogic({
  type: [LOGIN_SUCCESS, LOGOUT_SUCCESS],
  process({ action, getState, navigate }, dispatch, done) {
    const { auth } = getState();
    const { payload, type } = action;

    switch (type) {
      case LOGIN_SUCCESS: {
        const { email, memberId } = payload;
        dispatch(navigate({ routeName: 'Tabs' }));
        console.log('Login Success', email, memberId);
        break;
      }

      case LOGOUT_SUCCESS: {
        console.log('Logout Success');
        break;
      }
    }

    done();
  },
});

export const authLogic = [loginLogic, logoutLogic, onSuccessLogic];

// Selectors
export const hasAccess = ({ auth }) => {
  return auth.hasToken;
};

// Action Creators
export function authLogin(email, password) {
  return { type: LOGIN, payload: { email, password } };
}

export function authLogout() {
  return { type: LOGOUT };
}

// Reducer
export default function authReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
    case LOGOUT:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        error: false,
        hasToken: true,
        loading: false,
        message: '',
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        hasToken: false,
        message: 'Incorrect email or password.',
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        error: false,
        hasToken: false,
        loading: false,
        message: '',
      };

    default:
      return state;
  }
}
