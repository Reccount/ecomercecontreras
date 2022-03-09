import React,{useState} from 'react'
import {createOrder} from "../../firebase/firebase"

const CheckOut = ({carrito,total}) => {
    const [ form, setForm] = useState({
      buyer:{
          name:"",
          phone:"",
          mail:""
      },
      items: carrito,
      total: total,
      date : Date()
  })
  const handlerChange = (e) => {
    setForm({
        ...form,
        buyer:{
            ...form.buyer,
            [e.target.name]:e.target.value
        }
    })
    
  }
  const handlerSubmit = (e)=>{
    e.preventDefault();
    createOrder ({data:form});
  }

  return (
    <div className="form-container">
        <form onSubmit={handlerSubmit}>
            <div className="mb-3">
                <label for="name" className="form-label" >Nombre</label>
                <input onChange={handlerChange} value={form.buyer.name} type="text" name="name" className="form-control" />
            </div>
                <div className="mb-3">
                <label for="phone" className="form-label" >Telefono</label>
                <input onChange={handlerChange} value={form.buyer.phone} type="number" name="phone" className="form-control"/>
            </div>
                <div className="mb-3">
                <label for="mail" className="form-label" >Email</label>
                <input onChange={handlerChange} value={form.buyer.mail} type="mail" name="mail" className="form-control" />
            </div>
            <button disabled={!form.buyer.name ||!form.buyer.phone || !form.buyer.mail} type="submit" className="btn btn-primary">Comprar</button>
        </form>
      </div>
  )
}

export default CheckOut