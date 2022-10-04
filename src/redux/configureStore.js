import { legacy_createStore as legacyCreateStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import user from './user/userSessions';
import reservations from './reservations/reservations';
import vehicles, { listAllVehicles } from './vehicles/vehicles';

const reducer = combineReducers({ vehicles, user, reservations });

const store = legacyCreateStore(reducer, applyMiddleware(logger, thunk));
store.dispatch(listAllVehicles());

export default store;
