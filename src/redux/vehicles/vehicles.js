import client from '../../utils/client';

const CLEAR_MESSAGES = 'book-vehicle/vehicles/CLEAR_MESSAGES';
const LOAD_SUCCESS = 'book-vehicle/vehicles/LOAD_SUCCESS';
const LOAD_FALURE = 'book-vehicle/vehicles/LOAD_FALURE';
const SHOW_SUCCESS = 'book-vehicle/vehicles/SHOW_SUCCESS';
const SHOW_FALURE = 'book-vehicle/vehicles/SHOW_FALURE';
const ADDVEHICLE_SUCCESS = 'book-vehicle/vehicles/ADDVEHICLE_SUCCESS';
const ADDVEHICLE_FALURE = 'book-vehicle/vehicles/ADDVEHICLE_FALURE';
const DELETEVEHICLE_SUCCESS = 'book-vehicle/vehicles/DELETEVEHICLE_SUCCESS';
const DELETEVEHICLE_FAILURE = 'book-vehicle/vehicles/DELETEVEHICLE_FAILURE';

export default function reducer(state = {
  visible: [],
  all: [],

  current: undefined,
  errors: [],
  notice: undefined,
}, action = {}) {
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
      return {
        ...state,
        notice: action.payload,
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
      const newAll = state.all.map(
        (vehicle) => {
          const tempVehicle = { ...vehicle };
          if (vehicle.id === action.payload) { tempVehicle.visible = false; }
          return tempVehicle;
        },
      );
      const newVisible = state.visible.filter(
        (vehicle) => vehicle.id !== action.payload,
      );
      return { ...state, all: newAll, visible: newVisible };
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

export const loadVehicles = () => ((dispatch) => client
  .get('/vehicles').then(
    (response) => {
      dispatch({
        type: LOAD_SUCCESS,
        payload: response.data.vehicles,
      });
    },
    (error) => {
      dispatch({
        type: LOAD_FALURE,
        payload: error.response?.data || error.messsage,
      });
    },
  ));

export const showVehicle = (vehicleId) => ((dispatch) => client
  .get(`/vehicles/${vehicleId}`).then(
    (response) => {
      dispatch({
        type: SHOW_SUCCESS,
        payload: response.data,
      });
    },
    (error) => {
      dispatch({
        type: SHOW_FALURE,
        payload: error.response?.data || error.messsage,
      });
    },
  ));

export const addVehicle = (vehicle) => ((dispatch) => {
  dispatch({ type: CLEAR_MESSAGES });
  return client
    .post('/vehicles', vehicle).then(
      (response) => {
        dispatch({
          type: ADDVEHICLE_SUCCESS,
          payload: response.data.message,
        });
      },
      (error) => {
        dispatch({
          type: ADDVEHICLE_FALURE,
          payload: error.response?.data.error.split('. ') || [error.messsage],
        });
      },
    );
});

export const deleteVehicle = (vehicleId) => ((dispatch) => client
  // .patch('/vehicles/${vehicleId}', vehicleId).then(
  .patch(`/vehicles/${vehicleId}`, { visible: false }).then(
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
  ));
