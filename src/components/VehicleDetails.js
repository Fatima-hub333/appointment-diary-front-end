import React from 'react';

function VehicleDetails() {
  const vehicles = [
    {
      id: 1,
      name: 'vehicle 1',
      description: 'This is a description for vehicle 1',
      image: 'https://images.unsplash.com/photo-1610553556003-9b2ae8ef1b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '$900',
    },
    {
      id: 2,
      name: 'vehicle 2',
      description: 'This is a description for vehicle 2',
      image: 'https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '$600',
    },
    {
      id: 3,
      name: 'vehicle 3',
      description: 'This is a description for vehicle 3',
      image: 'https://images.unsplash.com/photo-1609316696815-29de8998f96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '$1000',
    },
    {
      id: 4,
      name: 'vehicle 4',
      description: 'This is a description for vehicle 4',
      image: 'https://images.unsplash.com/photo-1626840362735-afb64615318d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '$500',
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
