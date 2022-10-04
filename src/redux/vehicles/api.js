const Api = 'https://book-vehicle.herokuapp.com/api/v1/vehicles?authentication_token=';
const authenticationToken = 'zVJzDi87E5yJLxsC2U_h';

const listVehicles = async () => {
  const vehiclesObj = await fetch(Api + authenticationToken, { method: 'GET' }).catch((error) => error.message);
  const vehiclesJson = await vehiclesObj.json();
  const vehicles = vehiclesJson.data.map((vehicle) => vehicle);
  return vehicles;
};


export const newVehicle = async (brand, model, price, image, description) => {
  console.log(brand, model, price, image, description);
  await fetch('https://book-vehicle.herokuapp.com/api/v1/vehicles' , {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      authentication_token: authenticationToken,
      brand,
      model,
      price,
      image,
      description,
    }),
  }).catch((error) => error.message);
};

export default listVehicles;
