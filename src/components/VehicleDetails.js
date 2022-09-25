import React from 'react';

function VehicleDetails() {
  const vehicles = [
    {
      id: 1,
      name: 'vehicle 1',
      description: 'This is a description for vehicle 1',
      image: 'https://images.unsplash.com/photo-1610553556003-9b2ae8ef1b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
      price: '$100',
    },
  ];
  const vehicle = vehicles[0];
  return (
    <div>
      <div>
        <h1>Vehicle Details</h1>
      </div>
      <div>
        <div className="details-card">
          <img className="card-img-det" src={vehicle.image} alt="Card cap" />
          <div className="card-body d-flex justify-content-between img-text">
            <h5 className="card-title">{vehicle.name}</h5>
            <p className="card-text">{vehicle.price}</p>
          </div>
        </div>
        <div>
          <p>About this vehicle</p>
          <p>{vehicle.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails;
