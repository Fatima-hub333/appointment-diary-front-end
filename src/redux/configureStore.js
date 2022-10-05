import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import registration from './user/userRegistrations';
import user from './user/userSessions';
import reservations, { getReservations } from './reservations/reservations';
import vehicles, { listAllVehicles } from './vehicles/vehicles';

const composeEnhancers = composeWithDevTools(applyMiddleware(logger, thunk));
const reducer = combineReducers({
  registration,
  user,
  vehicles,
  reservations,
});

const store = createStore(reducer, composeEnhancers);
store.dispatch(listAllVehicles());
store.dispatch(getReservations());

export default store;
