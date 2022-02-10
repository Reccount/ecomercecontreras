import React, { useEffect, useState } from 'react';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contador({inicial,stock}) {
    /*const inicial = props.inicial;
    const stock = props.Stock;*/
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
    
    return (
        <>
        <div className="contenedor-contador">
            <button className="btn-right" onClick={onClicksus}>-</button>
            <span className="contador-num">{contador}</span>
            <button className="btn-left" onClick={onClickplus}>+</button>
            <button className="btn-addCar" > <FontAwesomeIcon icon={faCartPlus} /> </button>
        </div>
        
        </>
    );
}

export default Contador;
