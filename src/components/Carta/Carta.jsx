import React from 'react';


function Carta(props) {
  const estilos = {
    backgroundImage : `url(${props.itemData.img})`,
    backgroundSize: `cover`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }

  
  // <img className = "carta-img-r" src= {props.itemData.img} alt="guitar img" /> col-lg-4 col-md-4 col-sm-12 
  return (
    <div className="carta-container col-lg-3 col-md-6 col-sm-12">
      <div className="carta ex region-out " id={props.itemData.id}>
            <div className="carta-img ex" style={estilos}></div>
            <div className="carta-desc">
              <h5>{props.itemData.title}</h5>
              <p>{props.itemData.shortdesc}</p>
            </div>
            <div className="carta-c"><span>precio: {props.itemData.Price}</span><span>Stock: {props.itemData.stock}</span></div>
      </div>
    </div>);
}

export default Carta;

