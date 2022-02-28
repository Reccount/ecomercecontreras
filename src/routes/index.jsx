import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from '../components/Menu/NavBar.jsx';
import Itemlistcontainer from '../components/ListContainer/ListContainer.jsx'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import CarContainer from '../components/CarContainer/CarContainer'




function Rutas() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Itemlistcontainer/>}/>
            <Route path="/category/:category" element={<Itemlistcontainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CarContainer/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas