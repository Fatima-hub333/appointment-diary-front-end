import { Link } from 'react-router-dom';

function NavigationPanel() {
  return (
    <div className="NavigationPanel">
      <div className="App">
        <nav>
            <div>
              <ul>
                <li className="nav-item">
                  <Link className="nav-link" to="/main">
                    Vehicles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reservation">
                    Reserve
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/reservations">
                    My reservations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/vehicle">
                    Add a vehicle
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/vehicle">
                    Delete vehicle
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavigationPanel;
