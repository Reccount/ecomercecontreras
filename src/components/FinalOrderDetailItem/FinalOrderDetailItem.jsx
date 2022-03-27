import React from 'react'

function FinalOrderDetailItem({itemDetail}) {
  console.log(itemDetail)
  const estilos = {
    backgroundImage : `url(${itemDetail.img})`,
  }
    return (
    <div className="itemDetail ex">
        <div className="itemDetailimg" style={estilos}></div>
        <div>{itemDetail.title}</div>
        <div>{itemDetail.quantity}</div>
        <div>{itemDetail.price}</div>
    </div>
  )
}

export default FinalOrderDetailItem