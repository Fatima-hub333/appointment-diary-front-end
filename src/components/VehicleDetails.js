import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicleDetails } from '../redux/vehicles/vehicles';

function VehicleDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [vehicle] = useSelector((state) => state.vehicles);

  useEffect(() => {
    console.log('PARAM ID: ', id);
    dispatch(getVehicleDetails(9));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <h1>Vehicle Details</h1>
      </div>
      <div>
        <div className="details-card">
          <img className="card-img-det" src={vehicle.image} alt="Card cap" />
          <div className="card-body d-flex justify-content-between img-text">
            <h5 className="card-title">{vehicle.brand}</h5>
            <p className="card-text">{vehicle.price}</p>
          </div>
        </div>
        <div>
          <p>About this vehicle</p>
          <p>{vehicle.description}</p>
        </div>
      </div>
      <Link to={`/vehicles/${vehicle.id}/reservation`}>
        <button type="submit" className="btn btn-primary add-btn mx-auto">
          Add to reservation
        </button>
      </Link>
    </div>
  );
}

export default VehicleDetails;
