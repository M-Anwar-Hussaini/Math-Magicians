import { Link } from 'react-router-dom';

function Navigator() {
  return (
    <div className="container py-4 bg-success mb-2 rounded">
      <nav className="d-flex justify-content-between align-items-center">
        <Link to="/" className="btn btn-light">
          <h1>Math Magicians</h1>
        </Link>
        <div className="list-group list-group-horizontal">
          <Link to="/" className="list-group-item list-group-item-action">
            Home
          </Link>
          <Link
            to="/calculator"
            className="list-group-item list-group-item-action"
          >
            Calculator
          </Link>
          <Link to="/quotes" className="list-group-item list-group-item-action">
            Quotes
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigator;
