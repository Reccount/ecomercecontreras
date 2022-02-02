import './App.css';
import NavBar from './components/Menu/NavBar.jsx';
import ListContainer from './components/ListContainer.jsx';
import './css/neomorphs.css';
import './css/estructura.css';
/*import './css/animaciones.css';*/

function App() {
  return (
    <div className="App container">
      <NavBar></NavBar>
      <ListContainer title = "Bienvenidos a la musica"/>
    </div>
  );
}

export default App;
