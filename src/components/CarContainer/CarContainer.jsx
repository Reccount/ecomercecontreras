import React,{ useEffect, useState,useContext }   from 'react'
import {CarContext} from "../../CarContext/CarProvider"
import CarItem from "../CarItem/CarItem"
import CheckOut from "../CheckOut/CheckOut"
import {createOrder, getOrder} from "../../firebase/firebase"
import FinalOrderDetail from "../FinalOrderDetail/FinalOrderDetail"


function CarContainer() {
    const{car,fclearAll,fgetTotalPrice}= useContext(CarContext);
    const [carItem, setCarItem] = useState(['no-item']);
    const [orderdetail, setOrderdetail] = useState(null)
    
    useEffect(() => {
       if(car.length > 0){
            const carItem = car.map((item => {return <CarItem itemData={item} key={item.id} q={item.quantity} />}))
            setCarItem(carItem);
        }else{
            const carItem = [<CarItem itemData = {'no-item'} key={1}/> ]
            setCarItem(carItem);
        }
        
    }, [car]);
    const handlerSubmit = (form)=>{
        let compraPromise = createOrder ({data:form});
        compraPromise.then(
            function (idCompra){
                fclearAll();
                bringDetails(idCompra);
            })
        
    }
    const bringDetails = (id) =>{
        let detailPromise = getOrder(id);
        detailPromise.then(result => setOrderdetail(result))
    }
    
  return (
    <>
    {(!orderdetail) ? <div className="car-form-container">
    <div className={car.length > 0 ? "CarItemContainer":"CarItemContainerEmpty" }>
        {car.length > 0 && <div className="clear-all-container"><button className="ex region-out btn-remove" onClick={()=>fclearAll()}>Borrar todo </button></div>}    
        {carItem}
        {car.length > 0 && <div className="car-item ex region-out">
                                <div className="total-region">
                                    <h2>total = ${fgetTotalPrice()}</h2>
                                </div>
                            </div>}
    </div>
    {car.length > 0 &&<CheckOut handlerSubmit={handlerSubmit} carrito={car} total={fgetTotalPrice()}/>}
    </div> :
    <FinalOrderDetail orderDetail={orderdetail}/>}
    </>
  )
}
export default CarContainer;