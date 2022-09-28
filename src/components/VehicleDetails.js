import React from 'react';

function VehicleDetails() {
  const vehicles = [
    {
      id: 1,
      name: 'vehicle 1',
      description: 'This is a description for vehicle 1',
      image: 'https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '$1000',
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
      <button type="submit" className="btn btn-primary add-btn mx-auto">Add to reservation</button>
    </div>
  );
}

export default VehicleDetails;
