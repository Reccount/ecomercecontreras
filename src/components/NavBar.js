//import './App.css';
import logo from './../imagenes/pngegg.png';

function App() {
  return (
    <div className="neo-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light ex region-out">
        <div class="container-fluid">
        <a class="navbar-brand logo-and-name" href="#"><img src={logo} className="logo"  alt="logo"/><span id="nombre" className="d-none d-md-block"> Guitar Finder </span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Peticion</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      
      
    </div>
  );
}
export default App;
