import React,{ useEffect, useState,useContext }   from 'react'
import {CarContext} from "../../CarContext/CarProvider"
import CarItem from "../CarItem/CarItem"
import CheckOut from "../CheckOut/CheckOut"


function CarContainer() {
    const{car,fclearAll,fgetTotalPrice}= useContext(CarContext);
    const [carItem, setCarItem] = useState(['no-item']);
    
    useEffect(() => {
       if(car.length > 0){
            const carItem = car.map((item => {return <CarItem itemData={item} key={item.id} q={item.quantity} />}))
            setCarItem(carItem);
        }else{
            const carItem = [<CarItem itemData = {'no-item'} /> ]
            setCarItem(carItem);
        }
        
    }, [car]);

    
  return (
    <>
    <div className="car-form-container">
    <div className={car.length > 0 ? "CarItemContainer":"CarItemContainerEmpty" }>
        {car.length > 0 && <div className="clear-all-container"><button className="ex region-out btn-remove" onClick={()=>fclearAll()}>Borrar todo </button></div>}    
        {carItem}
        {car.length > 0 && <div className="car-item ex region-out">
                                <div className="total-region">
                                    <h2>total = ${fgetTotalPrice()}</h2>
                                </div>
                            </div>}
    </div>
    {car.length > 0 &&<CheckOut carrito={car} total={fgetTotalPrice()}/>}
    </div>
    </>
  )
}
export default CarContainer;