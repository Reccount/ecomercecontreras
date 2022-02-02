//import './App.css';
import logo from './../../imagenes/pngegg.png';
import CarWidget from './CarWidget';


function Navbar() {
  return (
    
    <div className="neo-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ex region-out">
        <div className="container-fluid">
          <a className="navbar-brand logo-and-name" href="/#">
            <img src={logo} className="logo"  alt="logo"/>
              <span id="nombre" className="d-none d-md-block"> Guitar Finder </span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Peticion</a>
              </li>
            </ul>
          </div>
          <CarWidget />
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
