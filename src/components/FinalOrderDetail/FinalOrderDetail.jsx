import React , { useState, useEffect} from 'react'
import FinalOrderDetailItem from '../FinalOrderDetailItem/FinalOrderDetailItem'
import { Link } from 'react-router-dom'

function FinalOrderDetail({orderDetail}) {
    const [detail,SetDetail] = useState([null]);
    const items = orderDetail.items;

    useEffect(() => {
        const detailItem = items.map((item => {return <FinalOrderDetailItem itemDetail={item} key={item.id}  />}))
        SetDetail(detailItem);
    },[items]) 
  
    return (
    <div id="OrderDetail">
        <h1>Muchas Gracias <span id="nombre">{orderDetail.buyer.name}</span></h1>
        <h3>tu compra ha sido exitosa</h3>
        <div>Con el codigo <span id="orderid">{orderDetail.id}</span> Podras hacerle seguimiento</div>
        <div>recuerde revisar su correo <span className="personalData">{orderDetail.buyer.mail}</span> en donde se enviara la factura</div>
        <div>y nos contactaremos al numero <span className="personalData">{orderDetail.buyer.phone}</span> para coordinar la entrega</div>
        <h4>detalle de compra</h4>
        { detail }
        <div className="itemDetail ex">total de su compra fue de <span id="total">${orderDetail.total}</span></div>
        <div><Link to={`../`} className=" btn-addCar"><span>Volver a la tienda</span></Link></div>
    </div>
  )
}

export default FinalOrderDetail