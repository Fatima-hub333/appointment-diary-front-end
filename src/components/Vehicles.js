import { Link } from 'react-router-dom';

function Vehicles() {
  const vehicles = [
    {
      id: 1,
      name: 'vehicle 1',
      description: 'This is a description for vehicle 1',
      image: 'https://images.unsplash.com/photo-1617109887854-f661d37fca2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '$400',
    },
    {
      id: 2,
      name: 'vehicle 2',
      description: 'This is a description for vehicle 2',
      image: 'https://images.unsplash.com/photo-1626840362735-afb64615318d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '$700',
    },
    {
      id: 3,
      name: 'vehicle 3',
      description: 'This is a description for vehicle 3',
      image: 'https://images.unsplash.com/photo-1591259877480-41047587d1a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: '$900',
    },
    {
      id: 4,
      name: 'vehicle 4',
      description: 'This is a description for vehicle 4',
      image: 'https://images.unsplash.com/photo-1627366197691-e0d5cee520bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: '$1000',
    },
  ];
  return (
    <div className="vehicles-list-cont">
      <div>
        <h1>List of Vehicles</h1>
      </div>
      <div className="list-wrapper">
        <ul className="list-con">
          {vehicles.map((vehicle) => (
            <li className="list-group-item" key={vehicle.id}>
              <Link to={`/vehicles/${vehicle.id}`}>
                <div className="vehi-card">
                  <img className="card-img-top" src={vehicle.image} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.name}</h5>
                    <p className="card-text">{vehicle.price}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Vehicles;
