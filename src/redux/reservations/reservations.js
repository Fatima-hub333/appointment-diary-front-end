import client from '../../utils/client';

const token = '4usnywFP4xGPPsEDmfAy'; // to be passed from user state

const ADDRESERVATION = 'bookit/reservations/ADDRESERVATION';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADDRESERVATION: {
      const reservation = { ...action.payload, id: Date.now() };
      return [...state, reservation];
    }
    default:
      return state;
  }
}

export const addReservation = (reservation) => ({
  type: ADDRESERVATION,
  payload: reservation,
});

export const postReservation = (reservation) => async (dispatch) => {
  const id = reservation.vehicle_id;
  const payload = {
    authentication_token: token,
    city: reservation.city,
    date: reservation.date,
  };
  const data = JSON.stringify(payload);
  const response = await client.post(
    `/api/v1/vehicles/${id}/reservations`,
    data,
  );
  const res = response.data;
  dispatch(addReservation(res.data));
};
