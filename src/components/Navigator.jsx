function Navigator() {
  return (
    <div className="container py-4 bg-success mb-2 rounded">
      <nav className="d-flex justify-content-between align-items-center">
        <a href="/" className="btn btn-light">
          <h1>Math Magicians</h1>
        </a>
        <div className="list-group list-group-horizontal">
          <a href="/" className="list-group-item list-group-item-action">
            Home
          </a>
          <a
            href="/calculator"
            className="list-group-item list-group-item-action"
          >
            Calculator
          </a>
          <a href="/quotes" className="list-group-item list-group-item-action">
            Quotes
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navigator;
