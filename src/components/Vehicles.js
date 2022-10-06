// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Vehicles.scss';

const Vehicles = () => {
  const vehicles = [
    {
      id: 10,
      brand: 'G-Wagon 3',
      model: 'G-Class base',
      price: '120000.0',
      image:
        'https://imgd.aeplcdn.com/1200x900/cw/ec/36129/MercedesBenz-GClass-Exterior-137817.jpg?wm=0&q=75',
      description:
        'The Mercedes-Benz G-Class has finally entered its second generation.',
      created_at: '2022-10-05T02:17:30.389Z',
      updated_at: '2022-10-05T02:17:30.389Z',
      visible: true,
    },
    {
      id: 11,
      brand: 'G-Wagon 4',
      model: 'G-Class base',
      price: '120000.0',
      image:
        'https://imgd.aeplcdn.com/1200x900/cw/ec/36129/MercedesBenz-GClass-Exterior-137817.jpg?wm=0&q=75',
      description:
        'The Mercedes-Benz G-Class has finally entered its second generation.',
      created_at: '2022-10-05T02:17:46.390Z',
      updated_at: '2022-10-05T02:17:46.390Z',
      visible: true,
    },
  ]; // useSelector((state) => state.vehicles);
  return (
    <div className="vehicles-list-cont">
      <div>
        <h1>List of Vehicles</h1>
      </div>
      <div className="list-wrapper">
        <ul className="list-con">
          {vehicles.map((vehicle) => (
            <li className="list-group-item" key={vehicle.id}>
              <Link to={`/vehicles/${vehicle.id}/details`}>
                <div className="vehi-card">
                  <img
                    className="card-img-top"
                    src={vehicle.image}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {vehicle.brand}
                      {' '}
                      {vehicle.model}
                    </h5>
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
};

export default Vehicles;
