import React, { useEffect, useState } from 'react';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

function Contador({inicial,stock}) {
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

    const hideCount = ()=>{
        let goCar = document.getElementById('goCar'),
            addCar= document.getElementById('addCar'),
            contadorCont= document.getElementById('contadorCont');
            
            console.log(contador);
            goCar.classList.remove("hide");
            addCar.classList.add("hide");
            contadorCont.classList.add("hide");
        
    }
    
    return (
        <>
        <div id ='contadorCont' className="contenedor-contador">
            <button className="btn-right" onClick={onClicksus}>-</button>
            <span className="contador-num">{contador}</span>
            <button className="btn-left" onClick={onClickplus}>+</button>
            
        </div>
        <button id ='addCar'className="addCar btn-addCar" onClick={hideCount}> <FontAwesomeIcon icon={faCartPlus} /> </button>
        <Link id='goCar' to={`/cart`} className=" btn-addCar hide" > ir al Carrito </Link>
        </>
    );
}

export default Contador;
