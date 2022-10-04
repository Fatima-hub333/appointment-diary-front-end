const Api = 'https://book-vehicle.herokuapp.com/api/v1/vehicles?authentication_token=';
const authenticationToken = 'zVJzDi87E5yJLxsC2U_h';

const listVehicles = async () => {
  const vehiclesObj = await fetch(Api + authenticationToken, { method: 'GET' }).catch((error) => error.message);
  const vehiclesJson = await vehiclesObj.json();
  const vehicles = vehiclesJson.data.map((vehicle) => vehicle);
  return vehicles;
};

export default listVehicles;
