import './App.css';
import NavBar from './components/Menu/NavBar.jsx';
import ListContainer from './components/ListContainer.jsx';
import './css/neomorphs.css';
import './css/estructura.css';
/*import './css/animaciones.css';*/

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <NavBar></NavBar>
      <ListContainer nitem = {4}/>
    </div>
  );
}

export default App;
