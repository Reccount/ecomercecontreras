//import './App.css';
import logo from './../../imagenes/pngegg.png';
import CarWidget from './CarWidget';
import {Link} from "react-router-dom"


function Navbar() {
  return (
    
    <div className="neo-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ex region-out">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand logo-and-name" >
            <img src={logo} className="logo"  alt="logo"/>
              <span id="nombre" className="d-none d-md-block"> Guitar Finder </span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/category/Electrica"} className="nav-link">Guitarra Electrica</Link>
              </li>
              <li className="nav-item">
                <Link to={"/category/Acustica"} className="nav-link">Guitarra Acustica</Link>
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
