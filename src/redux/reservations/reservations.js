/* eslint-disable no-unused-vars */
import client from '../../utils/client';
import { token } from '../vehicles/vehicles';


const LOAD_SUCCESS = 'book-vehicle/reservations/LOAD_SUCCESS';
const LOAD_FALURE = 'book-vehicle/reservations/LOAD_FALURE';

const ADDRESERVATION_SUCCESS = 'book-vehicle/reservations/ADDRESERVATION_SUCCESS';
const ADDRESERVATION_FAILURE = 'book-vehicle/reservations/ADDRESERVATION_FAILURE';

export default function reducer(
  state = { reservations: [], error: undefined },
  action = {},
) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return { ...state, reservations: [...action.payload], error: undefined };
    }
    case LOAD_FALURE: {
      return { ...state, reservations: [], error: action.payload };
    }
    case ADDRESERVATION_SUCCESS: {
      const { city, date, vehicle_id: vehicleId } = action.payload;
      const reservation = {
        id: Date.now,
        city,
        date,
        vehicle_id: vehicleId,
      };
      return { reservations: [...state.reservations, reservation] };
    }
    case ADDRESERVATION_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export const loadReservations = () => (dispatch) =>
  client.get(`api/v1/reservations?authentication_token=${token}`).then(
    (response) => {
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

export const addReservation = (reservation) => (dispatch) => 
{
  reservation.authentication_token = token
  console.log(reservation)
  client
    .post(`api/v1/vehicles/${reservation.vehicle_id}/reservations`, reservation)
    .then(
      () => {
        dispatch({
          type: ADDRESERVATION_SUCCESS,
          payload: reservation,
        });
      },
      (error) => {
        dispatch({
          type: ADDRESERVATION_FAILURE,
          payload: error?.message,
        });
      }
    );};
