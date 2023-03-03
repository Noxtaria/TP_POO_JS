import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <i className="bi bi-globe"></i> Accueil eFlashcard
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <button className="ms-2 border-0 bg-transparent text-light"><i className="bi bi-plus-circle-fill"></i> Ajouter une Flashcard</button>
              <button className="ms-2 border-0 bg-transparent text-light"><i className="bi bi-shuffle"></i> Flashcard au hasard</button>
              </div>
            </div>

            <form className="form-inline my-2 my-lg-0 d-flex">
              <input
                className="form-control mr-sm-2 me-2"
                type="search"
                placeholder="4"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                GO
              </button>
            </form>
          </div>
        </nav>
      </header>
      <main className="container">
        <div className="row my-3">
          <div className="col-10 offset-1 bg-dark rounded text-light p-3">
            <div className="align-items-center">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;





