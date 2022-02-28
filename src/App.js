import './App.css';
import Rutas from "./routes"
import './css/neomorphs.css';
import './css/estructura.css';
import CarProvider from './CarContext/CarProvider';


function App() {

  return (
    <div className="App container">
      <CarProvider>
        <Rutas/>
      </CarProvider>
    </div>
  );
}

export default App;
