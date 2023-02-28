import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">eWebSite</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">Home</NavLink> 
              <NavLink className="nav-link" to="/contact">Contacts</NavLink>
            </div>
          </div>
        </div>
      </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;