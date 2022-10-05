import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import '../styles/MyReservations.scss';

function MyReservations() {
  const reservations = useSelector((state) => state.reservations);

  return (
    <div className="MyReservations">
      <h1 className="text-center">My reservations</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Vehicle</th>
            <th>Date</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>
                {reservation.vehicle_id /* update to brand */}
                {' '}
              </td>
              <td>{reservation.date}</td>
              <td>{reservation.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyReservations;
