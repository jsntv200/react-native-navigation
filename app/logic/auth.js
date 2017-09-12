import { createLogic } from 'redux-logic';
import { NavigationActions } from 'react-navigation';

// Actions
const LOGIN = '@@app/auth/LOGIN';
const LOGIN_SUCCESS = '@@app/auth/LOGIN_SUCCESS';
const LOGIN_ERROR = '@@app/auth/LOGIN_ERROR';

const LOGOUT = '@@app/auth/LOGOUT';
const LOGOUT_SUCCESS = '@@app/auth/LOGOUT_SUCCESS';

const VALIDATE = '@@app/auth/VALIDATE';
const VALIDATE_SUCCESS = '@@app/auth/VALIDATE_SUCCESS';

const CANCEL = '@@app/auth/CANCEL';

// Initial State
const initialState = {
  error: false,
  loading: false,
  message: '',
  member: {},
};

// Observables
const loginLogic = createLogic({
  type: LOGIN,
  cancelType: CANCEL,
  processOptions: {
    successType: VALIDATE,
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

const validateLogic = createLogic({
  type: VALIDATE,
  cancelType: CANCEL,
  processOptions: {
    successType: VALIDATE_SUCCESS,
    failType: LOGOUT_SUCCESS,
  },
  process({ httpClient }) {
    return httpClient.get('/v1/members/summary');
  },
});

const redirectLogic = createLogic({
  type: [VALIDATE_SUCCESS, LOGOUT_SUCCESS],
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
      case VALIDATE_SUCCESS: {
        navigateTo('Tabs');
        break;
      }

      case LOGOUT_SUCCESS: {
        // Not working when with a subview
        navigateTo('SignIn');
        break;
      }
    }

    done();
  },
});

export const authLogic = [
  loginLogic,
  logoutLogic,
  redirectLogic,
  validateLogic,
];

// Action Creators
export function authLogin(email, password) {
  return { type: LOGIN, payload: { email, password } };
}

export function authLogout() {
  return { type: LOGOUT };
}

export function authLogoutSuccess() {
  return { type: LOGOUT_SUCCESS };
}

export function authValidate() {
  return { type: VALIDATE };
}

// Reducer
export default function authReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
    case LOGOUT:
    case VALIDATE:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case VALIDATE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        message: '',
        member: { ...payload.data },
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
