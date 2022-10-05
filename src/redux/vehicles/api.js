import { useDispatch } from "react-redux";
import { DELETEVEHICLE } from "./vehicles";

const Api = 'https://book-vehicle.herokuapp.com/api/v1/vehicles';
const authenticationToken = 'zVJzDi87E5yJLxsC2U_h';

const listVehicles = async () => {
  const vehiclesObj = await fetch(
    `${Api}?authentication_token=${authenticationToken}`,
    { method: 'GET' },
  ).catch((error) => error.message);
  const vehiclesJson = await vehiclesObj.json();
  const vehicles = vehiclesJson.data.map((vehicle) => vehicle);
  return vehicles;
};

export const newVehicle = async (
  brand,
  model,
  price,
  image,
  description,
  visible,
) => {
  console.log(brand, model, price, image, description);
  await fetch(Api, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      authentication_token: authenticationToken,
      brand,
      model,
      price,
      image,
      description,
      visible,
    }),
  }).catch((error) => error.message);
};

export const removeVehicle = async (id) => {
  console.log(id);
  await fetch(`${Api}/${id}?authentication_token=${authenticationToken}`, {
    method: "DELETE",
  }).catch((error) => error.message);
};

export default listVehicles;
