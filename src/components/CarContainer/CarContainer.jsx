import React,{ useEffect, useState,useContext }   from 'react'
import {CarContext} from "../../CarContext/CarProvider"
import CarItem from "../CarItem/CarItem"


function CarContainer() {
    const{car,fclearAll,carq,total}= useContext(CarContext);
    const [carItem, setCarItem] = useState(['no-item']);
    useEffect(() => {
       if(car.length > 0){
            const carItem = car.map((item => {return <CarItem itemData={item} key={item.id} q={carq.find( data => data.id === item.id)} />}))
            setCarItem(carItem);
        }else{
            const carItem = [<CarItem itemData = {'no-item'} /> ]
            setCarItem(carItem);
        }
        
    }, []);

    
  return (
    <div className="CarItemContainer">
        {car.length > 0 && <div className="clear-all-container"><button className="ex region-out btn-remove" onClick={()=>fclearAll()}>Borrar todo </button></div>}    
        {carItem}
        {car.length > 0 && <div className="car-item ex region-out">
                                <div className="total-region">
                                    <h2>total = ${total}</h2>
                                </div>
                            </div>}
    </div>
  )
}
export default CarContainer;