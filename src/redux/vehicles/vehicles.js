import listVehicles, { newVehicle } from "./api";

const ADDVEHICLE = "bookit/vehicles/ADDVEHICLE";
const DELETEVEHICLE = "bookit/vehicles/DELETEVEHICLE";
const LISTALLVEHICLES = "bookit/vehicles/LISTALLVEHICLES";

const vehiclesReducer = function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADDVEHICLE: {
      const vehicle = { ...action.payload, id: Date.now() };
      return {
        ...state,
        visible: [...state.visible, vehicle],
        all: [...state.all, vehicle],
      };
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

export const deleteVehicle = (vehicleId) => ({
  type: DELETEVEHICLE,
  payload: vehicleId,
});

export const listAllVehicles = () => async (dispatch) => {
  const vehicles = await listVehicles();
  dispatch({ type: LISTALLVEHICLES, payload: vehicles });
};

export default vehiclesReducer;
