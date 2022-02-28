import React, { useEffect, useState,useContext } from 'react';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import {CarContext} from "../../CarContext/CarProvider"
// 
function Contador({inicial,stock, item}) {
    const{faddCar}= useContext(CarContext);
    const [contador, setContador] = useState(inicial);
    
    
    const onClickplus = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    };
    const onClicksus = () => {
        if(contador <= stock && contador > 1) {
            setContador(contador - 1);
        }
    };
    
    useEffect(() => {
    }, [contador]);
    let cantidad = {"id":item.id,"nitem": contador};
    return (
        <>
        <div id ='contadorCont' className="contenedor-contador">
            <button className="btn-right" onClick={onClicksus}>-</button>
            <span className="contador-num">{contador}</span>
            <button className="btn-left" onClick={onClickplus}>+</button>
        </div>
        <button id ='addCar'className="addCar btn-addCar" onClick={()=>faddCar(item,cantidad)}> <FontAwesomeIcon icon={faCartPlus} /> </button>
        <Link id='goCar' to={`/cart`} className=" btn-addCar hide" > ir al Carrito </Link>
        <div className="cont-shop">
            <Link to={`../`} >
                    <span>Continue Shopping</span>
            </Link>
         </div>
        </>
    );
}

export default Contador;
