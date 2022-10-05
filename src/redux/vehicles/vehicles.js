// import client from '../../utils/client';
import listVehicles, { newVehicle, removeVehicle } from './api';
const token = '4usnywFP4xGPPsEDmfAy';

const VEHICLEDETAILS = 'bookit/vehicles/VEHICLEDETAILS';
const ADDVEHICLE = 'bookit/vehicles/ADDVEHICLE';
export const DELETEVEHICLE = 'bookit/vehicles/DELETEVEHICLE';
const LISTALLVEHICLES = 'bookit/vehicles/LISTALLVEHICLES';


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
        (vehicle) => vehicle.id === current.id,
      );
      return [...VehicleDetails];
    }
    case DELETEVEHICLE: {

      return state.filter((vehicle) => vehicle.id !== action.payload.id);
    }
    case LISTALLVEHICLES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const addVehicle = (brand, model, price, image, description, visible) => async (dispatch) => {
  await newVehicle(brand, model, price, image, description, visible);
  dispatch({
    type: ADDVEHICLE,
    payload: {
      brand,
      model,
      price,
      image,
      description,
      visible,
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
    },
  );
  const res = await response.json();
  const data = await res.data;
  dispatch(vehicleDetail(data));
};
export const listAllVehicles = () => async (dispatch) => {
  const vehicles = await listVehicles();
  dispatch({ type: LISTALLVEHICLES, payload: vehicles });
};

export const deleteVehicle = (id) => async (dispatch) => {
  await removeVehicle(id);
  dispatch({ type: DELETEVEHICLE, payload: { id } });
};

export default vehiclesReducer;
export { addVehicle };
