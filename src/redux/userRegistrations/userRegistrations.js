/* eslint-disable no-undef */
import client from '../../utils/client';

const SIGNUP_REQUEST = 'book-vehicle/userRegistrations/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'book-vehicle/userRegistrations/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'book-vehicle/userRegistrations/SIGNUP_FAILURE';

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
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signup = (userData, navigate) => async (dispatch) => {
  dispatch(signupRequest());
  try {
    const user = userData;
    user.roles = ['user'];
    const payload = {
      name: user.username,
      email: user.email,
      password: user.password,
      password_confirmation: user.passwordConfirmation,
      roles: user.roles,
    };

    const data = JSON.stringify(payload);
    const response = await client.post('/users', data);
    const responseData = response.data;

    dispatch(signupSuccess(responseData.data));
    navigate('/');
    // toast.success('Signup successful');  //this need to fixed it sending errors in catch
  } catch (error) {
    dispatch(signupFailure(error.message));
    toast.error('Signup failed');
  }
};

export const setErrors = (error) => async (dispatch) => {
  dispatch(signupFailure(error));
  toast.error(error);
};
