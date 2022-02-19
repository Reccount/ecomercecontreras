import React from 'react'
import Contador from './../contador/contador'

function ItemDetail(props) {
    
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
                    <h3>Precio {props.producData.Price}</h3>
                    <spam>Categoria {props.producData.categoria}</spam>
                    <p>Stock {props.producData.stock}</p>
                    <Contador inicial={1} stock = {props.producData.stock}></Contador>
                </div> 
            </div>
        </div>
        <div className="detail-compra  col-sm-12 col-lg-5 d-sm-block d-lg-none">
            <div className="compra-sm ex region-out"> 
                <div className="foto-Extendida-sm ex region-out" style={foto}></div>
                <div className="detail-text-sm">
                    <h1>{props.producData.title}</h1>
                    <h3>Precio {props.producData.Price}</h3>
                    <p>Categoria {props.producData.categoria}</p>
                    <p>Stock {props.producData.stock}</p>
                    <Contador inicial={1} stock = {props.producData.stock}></Contador>
                </div>
            </div> 
        </div>
        
        <div className="detail-botom">
            <div className="detail-desc col-12">
                <div className=" ex region-out detail-text">
                {props.producData.des}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail