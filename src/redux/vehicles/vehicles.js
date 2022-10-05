import listVehicles, { newVehicle, removeVehicle } from './api';

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
