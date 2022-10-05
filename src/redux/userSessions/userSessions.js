import client from '../../utils/client';
import TokenManager from '../../utils/tokenManger';

const LOGIN_REQUEST = 'book-vehicle/userSessions/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'book-vehicle/userSessions/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'book-vehicle/userSessions/LOGIN_FAILURE';
const LOGOUT_REQUEST = 'book-vehicle/userSessions/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'book-vehicle/userSessions/LOGOUT_SUCCESS';
const LOGOUT_ERROR = 'book-vehicle/userSessions/LOGOUT_ERROR';

const initialUser = {
  id: null,
  username: null,
  email: null,
  role: null,
};

const defaultState = {
  loading: false,
  error: null,
  user: initialUser,
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

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (userData) => ({ type: LOGIN_SUCCESS, payload: userData });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
const logoutRequest = () => ({ type: LOGOUT_REQUEST });
const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
const logoutError = (error) => ({ type: LOGOUT_ERROR, payload: error });

export const login = (user, navigate) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const payload = { user };
    const response = await client.post('users/sign_in', payload);
    const { data } = response.data;
    const token = response.headers.authorization;
    TokenManager.setToken(token);
    dispatch(loginSuccess(data));
    navigate('/main');
  } catch (error) {
    dispatch(loginFailure(error.response.data.message));
  }
};

export const logout = (navigate) => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await client.delete('users/sign_out');
    TokenManager.destroyToken();
    navigate('/login');
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const setErrors = (error) => async (dispatch) => {
  dispatch(loginFailure(error));
};
