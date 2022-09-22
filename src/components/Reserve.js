import { useParams } from 'react-router';

function Reserve() {
  const { vehicleId } = useParams();
  return (
    <div className="Reserve">
      {vehicleId}
    </div>
  );
}

export default Reserve;
