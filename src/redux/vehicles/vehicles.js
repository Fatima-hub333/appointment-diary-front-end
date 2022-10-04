import listVehicles, { newVehicle } from "./api";

const ADDVEHICLE = "bookit/vehicles/ADDVEHICLE";
const DELETEVEHICLE = "bookit/vehicles/DELETEVEHICLE";
const LISTALLVEHICLES = "bookit/vehicles/LISTALLVEHICLES";

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
  (brand, model, price, image, description, visible) => async (dispatch) => {
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

export const deleteVehicle = (vehicleId) => ({
  type: DELETEVEHICLE,
  payload: vehicleId,
});

export const listAllVehicles = () => async (dispatch) => {
  const vehicles = await listVehicles();
  dispatch({ type: LISTALLVEHICLES, payload: vehicles });
};

export default vehiclesReducer;
