import client from '../../utils/client';
import TokenManager from '../../utils/tokenManger';

const CLEAR_MESSAGES = 'book-vehicle/vehicles/CLEAR_MESSAGES';
const LOAD_SUCCESS = 'book-vehicle/vehicles/LOAD_SUCCESS';
const LOAD_FALURE = 'book-vehicle/vehicles/LOAD_FALURE';
const SHOW_SUCCESS = 'book-vehicle/vehicles/SHOW_SUCCESS';
const SHOW_FALURE = 'book-vehicle/vehicles/SHOW_FALURE';
const ADDVEHICLE_SUCCESS = 'book-vehicle/vehicles/ADDVEHICLE_SUCCESS';
const ADDVEHICLE_FALURE = 'book-vehicle/vehicles/ADDVEHICLE_FALURE';
const DELETEVEHICLE_SUCCESS = 'book-vehicle/vehicles/DELETEVEHICLE_SUCCESS';
const DELETEVEHICLE_FAILURE = 'book-vehicle/vehicles/DELETEVEHICLE_FAILURE';
const token = TokenManager.getToken();

export default function reducer(
  state = {
    visible: [],
    all: [],

    current: undefined,
    errors: [],
    notice: undefined,
  },
  action = {},
) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        all: action.payload,
        visible: action.payload.filter((vehicle) => vehicle.visible),
        errors: [],
      };
    }
    case LOAD_FALURE: {
      return {
        ...state,
        visible: [],
        all: [],
        errors: [action.payload],
      };
    }
    case SHOW_SUCCESS: {
      return {
        ...state,
        current: action.payload,
        errors: [],
      };
    }
    case SHOW_FALURE: {
      return {
        ...state,
        current: undefined,
        errors: [action.payload],
      };
    }
    case ADDVEHICLE_SUCCESS: {
      state.all.push(action.payload.data); 
      return {
        ...state,
        notice: action.payload.message,
      };
    }
    case ADDVEHICLE_FALURE: {
      return {
        ...state,
        notice: undefined,
        errors: action.payload,
      };
    }
    case DELETEVEHICLE_SUCCESS: {
      const newAll = state.all.map((vehicle) => {
        const tempVehicle = { ...vehicle };
        if (vehicle.id === action.payload) {
          tempVehicle.visible = false;
        }
        return tempVehicle;
      });
      const newVisible = state.all.filter(
        (vehicle) => vehicle.id !== action.payload,
      );
      return { ...state, all: newVisible, visible: newVisible };
    }
    case DELETEVEHICLE_FAILURE: {
      return {
        ...state,
        errors: [action.payload],
      };
    }
    case CLEAR_MESSAGES: {
      return {
        ...state,
        errors: [],
        notice: undefined,
      };
    }
    default:
      return state;
  }
}

export const loadVehicles = () => (dispatch) =>
  client
    .get("api/v1/vehicles", { params: { authentication_token: TokenManager.getToken() } })
    .then(
      (response) => {
        console.log(response.data.data);
        dispatch({
          type: LOAD_SUCCESS,
          payload: response.data.data,
        });
      },
      (error) => {
        dispatch({
          type: LOAD_FALURE,
          payload: error.response?.data || error.messsage,
        });
      }
    );

export const showVehicle = (vehicleId) => (dispatch) =>
  client.get(`api/v1/vehicles/${vehicleId}?authentication_token=${token}`).then(
    (response) => {
      console.log(response)
      dispatch({
        type: SHOW_SUCCESS,
        payload: response.data.data,
      });
    },
    (error) => {
      dispatch({
        type: SHOW_FALURE,
        payload: error.response?.data || error.messsage,
      });
    }
  );

export const addVehicle = (vehicle) => (dispatch) => {
  vehicle.authentication_token = token
  const data = JSON.stringify(vehicle)
  dispatch({ type: CLEAR_MESSAGES });
  return client.post('api/v1/vehicles', data).then(
    (response) => {
      console.log(response.data);
      dispatch({
        type: ADDVEHICLE_SUCCESS,
        payload: response.data,
      });
    },
    (error) => {
      dispatch({
        type: ADDVEHICLE_FALURE,
        payload: error.response?.data.error.split('. ') || [error.messsage],
      });
    },
  );
};

export const deleteVehicle = (vehicleId) => (dispatch) => 
{
client
// .patch('/vehicles/${vehicleId}', vehicleId).then(
  .delete(`api/v1/vehicles/${vehicleId}?authentication_token=${token}`)
  .then(
    () => {
      dispatch({
        type: DELETEVEHICLE_SUCCESS,
        payload: vehicleId,
      });
    },
    (error) => {
      dispatch({
        type: DELETEVEHICLE_FAILURE,
        payload: error?.message,
      });
    },
  )};
