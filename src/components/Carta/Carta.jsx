import React from 'react';
import { Link } from 'react-router-dom'



function Carta(props) {
  const estilos = {
    backgroundImage : `url(${props.itemData.img})`,
    backgroundSize: `contain`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }
//comilla invertida alt 96
  return (
    
      <div className="carta-container col-lg-3 col-md-6 col-sm-12">
        <Link to={`/item/${props.itemData.id}`}>
        <div className="carta ex region-out " id={props.itemData.id}>
              <div className="carta-img ex" style={estilos}></div>
              <div className="carta-desc">
                <h5>{props.itemData.title}</h5>
              </div>
              <div className="carta-c"><span>precio: {props.itemData.price}</span><span>Stock: {props.itemData.stock}</span></div>
        </div>
        </Link>
      </div>
   );
}

export default Carta;

