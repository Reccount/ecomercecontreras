import React from 'react';
import Contador from '../contador/contador.jsx'

function Carta() {
  return (
    <div className="carta ex region-out">
          <div className="carta-img ex"></div>
          <div className="carta-desc">
            <h5>titulo del item</h5>
            <span>descripcion lorem ipsum lorem ipslorem...... </span>
          </div>
          <div className="carta-c"><Contador Stock = {5} inicial={1} ></Contador></div>
    </div>);
}

export default Carta;

