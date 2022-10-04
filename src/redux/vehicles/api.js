
const Api =
  "https://book-vehicle.herokuapp.com/api/v1/vehicles?authentication_token=";
const authentication_token = "zVJzDi87E5yJLxsC2U_h";

export const listVehicles = async () => {
  const vehiclesObj = await fetch(Api+authentication_token, { method: 'GET' }).catch((error) => error.message,);
  const vehiclesJson = await vehiclesObj.json();
  const vehicles = vehiclesJson.data.map((vehicle) => vehicle);
  return vehicles;
};

console.log(listVehicles());
