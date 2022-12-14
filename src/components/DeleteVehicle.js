import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVehicle } from '../redux/vehicles/vehicles';
import '../styles/DeleteVehicle.scss';

const DeleteVehicle = () => {
  const vehicles = useSelector((state) => state.vehicles.all);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteVehicle(id));
  };

  return (
    <div className="DeleteVehicle">
      <div className="text-center p-3 header-det">
        <h1>Vehicle List</h1>
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>
                {vehicle.brand}
                {' '}
                {vehicle.model}
              </td>
              <td>{vehicle.price}</td>
              <td>
                {vehicle.action}
                {vehicle.visible ? (
                  <button
                    type="submit"
                    className="btn btn-primary add-btn"
                    onClick={() => handleDelete(vehicle.id)}
                  >
                    Delete
                  </button>
                ) : (
                  'This vehicle has been deleted'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DeleteVehicle;
