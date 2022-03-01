import React ,{ useContext } from 'react'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CarContext} from "../../CarContext/CarProvider"


function CarItem(props) {
    const{fremoveCar}= useContext(CarContext);
    
    const estilos = {
      backgroundImage : `url(${props.itemData.img})`,
      backgroundSize: `contain`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "initial",
      height: "11rem",
      width: "30%",
      backgroundColor:"white"
    }
    
    return (
    props.itemData === 'no-item'? 
    <div className="car-item ">
        <div className="car-no-item-order ex region-out">
        <div className="car-no-item-title">
            <h1>Carrito Vacio</h1>
            <p>Aun no has seleccionado ninguno de nuestros articulos</p>
            <p>No seas timido, seguro la guitarra de tus sueños esta ahi</p>
        </div>
        </div>
    </div>
    
    :
    <div id={props.itemData.id} className="car-item ">
        <div className="car-item-order ex region-out">
            <div className="car-item-img" style={estilos}></div>
            <div className="car-item-specification">
                <div className="car-item-text">
                    <div className="car-item-title"><h3>{props.itemData.title}</h3></div>
                </div>
                <div className="car-item-number">
                    <div className="car-item-price">
                        <h2>${props.itemData.price}</h2>
                        <h4>x</h4>
                        <h4>{props.itemData.quantity}</h4>
                    </div>
                </div>
                <div className="car-item-icon">
                <button className="btn-remove" onClick={()=>fremoveCar(props.itemData)}> <FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarItem