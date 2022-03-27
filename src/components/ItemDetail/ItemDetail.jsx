import React ,{ useContext }from 'react'
import Contador from './../contador/contador'
import {CarContext} from "../../CarContext/CarProvider"
import { Link } from 'react-router-dom'

function ItemDetail(props) {
    const{fitemExist}= useContext(CarContext);
    const foto = {
        backgroundImage : `url(${props.producData.img})`,
       }
    
  return (
    <div className="detail-container">
        <div className="detail-top row">
            <div className="detail-min-fotos d-none d-lg-block col-md-2"> <div className="foto-min ex region-out" style={foto}></div></div>
            <div className="detail-fotos  d-none d-lg-block col-sm-12 col-lg-5"><div className="foto-Extendida ex region-out" style={foto}></div></div>
            <div className="detail-compra  d-none d-lg-block col-sm-12 col-lg-5">
                <div className="compra ex region-out"> 
                    <h1>{props.producData.title}</h1>
                    <h3>Precio {props.producData.price}</h3>
                    <span>Categoria {props.producData.categoria}</span>
                    <p>Stock {props.producData.stock}</p>
                    {!fitemExist(props.producData) ?
                    <Contador 
                        inicial={1} 
                        stock = {props.producData.stock} 
                        item={props.producData}
                    />
                    :   <><Link id='goCar' to={`/cart`} className=" btn-addCar" > ir al Carrito </Link>
                        <div className="cont-shop"><Link to={`../`} ><span>Seguir Comprando</span></Link></div></>}
                </div> 
            </div>
        </div>
        
        
        <div className="detail-botom">
            <div className="detail-desc col-12">
                <div className=" ex region-out detail-text">
                {props.producData.description}
                </div>
            </div>
        </div>
    </div>
  )
}
 

export default ItemDetail