import { Route, Routes } from 'react-router';
import NavigationPanel from './components/NavigationPanel';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Reserve from './components/Reserve';
import MyReservations from './components/MyReservations';
import DeleteVehicle from './components/DeleteVehicle';
import Vehicles from './components/Vehicles';
import VehicleDetails from './components/VehicleDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationPanel />
      <Routes>
        <Route path="/" element={(<Login />)} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/main" element={(<Vehicles />)} />
        <Route path="/vehicle" element={(<DeleteVehicle />)} />
        <Route path="/vehicles/:vehicleId/details" element={(<VehicleDetails />)} />
        <Route path="/vehicles/:vehicleId/reservation" element={(<Reserve />)} />
        <Route path="/reservation" element={(<Reserve />)} />
        <Route path="/user/reservations" element={(<MyReservations />)} />
      </Routes>
    </div>
  );
}

export default App;
