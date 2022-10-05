// import client from '../../utils/client';
import listVehicles, { newVehicle } from './api';

const token = '4usnywFP4xGPPsEDmfAy';

const ADDVEHICLE = 'bookit/vehicles/ADDVEHICLE';
const DELETEVEHICLE = 'bookit/vehicles/DELETEVEHICLE';
const LISTALLVEHICLES = 'bookit/vehicles/LISTALLVEHICLES';
const VEHICLEDETAILS = 'bookit/vehicles/VEHICLEDETAILS';

const vehiclesReducer = function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADDVEHICLE: {
      return [
        ...state,
        {
          brand: action.payload.brand,
          model: action.payload.model,
          price: action.payload.price,
          image: action.payload.image,
          description: action.payload.description,
        },
      ];
    }
    case VEHICLEDETAILS: {
      const current = action.payload;
      const VehicleDetails = state.filter(
        (vehicle) => vehicle.id === current.id
      );
      return [...VehicleDetails];
    }
    case DELETEVEHICLE: {
      const newAll = state.all.map((vehicle) => {
        const tempVehicle = { ...vehicle };
        if (vehicle.id === action.payload) {
          tempVehicle.visible = false;
        }
        return tempVehicle;
      });
      const newVisible = state.visible.filter(
        (vehicle) => vehicle.id !== action.payload
      );
      return { ...state, all: newAll, visible: newVisible };
    }
    case LISTALLVEHICLES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const addVehicle =
  (brand, model, price, image, description) => async (dispatch) => {
    await newVehicle(brand, model, price, image, description);
    dispatch({
      type: ADDVEHICLE,
      payload: {
        brand,
        model,
        price,
        image,
        description,
      },
    });
  };

export const vehicleDetail = (vehicle) => ({
  type: VEHICLEDETAILS,
  payload: vehicle,
});
export const deleteVehicle = (vehicleId) => ({
  type: DELETEVEHICLE,
  payload: vehicleId,
});

export const getVehicleDetails = (id) => async (dispatch) => {
  const response = await fetch(
    `https://book-vehicle.herokuapp.com/api/v1/vehicles/${id}?authentication_token=${token}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  );
  const res = await response.json();
  const data = await res.data;
  dispatch(vehicleDetail(data));
};
export const listAllVehicles = () => async (dispatch) => {
  const vehicles = await listVehicles();
  dispatch({ type: LISTALLVEHICLES, payload: vehicles });
};

export default vehiclesReducer;
