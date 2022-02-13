import './App.css';
import NavBar from './components/Menu/NavBar.jsx';
import ListContainer from './components/ListContainer.jsx';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

import './css/neomorphs.css';
import './css/estructura.css';
/*import './css/animaciones.css';*/



function App() {

  return (
    <div className="App container">
      <NavBar/>
      <ListContainer>
        <ItemList/>
      </ListContainer>
       <ItemDetailContainer/>
    </div>
  );
}

export default App;
