import client from '../../utils/client';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_ERROR = 'LOGOUT_ERROR';

const initialUser = {
  id: null,
  username: null,
  email: null,
};

const defaultState = {
  loading: false,
  error: null,
  user: initialUser,
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (userData) => ({ type: LOGIN_SUCCESS, payload: userData });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
const logoutRequest = () => ({ type: LOGOUT_REQUEST });
const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
const logoutError = (error) => ({ type: LOGOUT_ERROR, payload: error });

export const login = (user) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const data = JSON.stringify(user);
    const response = await client.post('/users/sign_in/', data);
    const res = response.data;
    const payload = res.data;
    dispatch(loginSuccess(payload));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    // const response = await client.post('/users/sign_out/', data); //uncomment to connect
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));
  }
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: initialUser,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
