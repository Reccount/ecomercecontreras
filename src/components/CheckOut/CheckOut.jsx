import React,{useState} from 'react'


const CheckOut = ({carrito,total,handlerSubmit}) => {
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
  
  const handlerForm = (e)=>{
    e.preventDefault();
    handlerSubmit(form)
  }
  
  function validateFields(){
    let val=0,
        emailRegex = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
        numRegex = /^[0-9]+$/,
        v_name=document.getElementsByName('name')[0],
        v_phone =document.getElementsByName('phone')[0],
        mail =document.getElementsByName('mail')[0];
    
    
    if(form.buyer.name){
        val=val+1;
        v_name.classList.remove("error")
    }else{
        if(v_name !== undefined){
            if(!v_name.classList.contains( 'error' )){
                v_name.classList.add( 'error' )
            }
        }

        val=val+0;
    }
    
    if(form.buyer.phone){
        if(numRegex.test(form.buyer.phone)){
            if((form.buyer.phone).length === 11){
                val=val+1;
                v_phone.classList.remove("error")
            }else{
                if(v_phone!== undefined){
                    if(!v_phone.classList.contains( 'error' )){
                        v_phone.classList.add( 'error' )
                    }
                }
                val=val+0; 
            }
        }
    }else{
        if(v_phone !== undefined){
            if(!v_phone.classList.contains( 'error' )){
                v_phone.classList.add( 'error' )
            }
        }
        val=val+0;
    }
    
    if(form.buyer.mail){
        if (emailRegex.test(form.buyer.mail)){
            val=val+1;
            mail.classList.remove("error")
        }
    }else{
        if(mail !== undefined){
            if(!mail.classList.contains( 'error' )){
                mail.classList.add( 'error' )
            }
        }
        val=val+0;
    }
    if (val === 3){
        return false;
        
    }else{
        return true;
        
    }
    
  }
  //!form.buyer.name ||!form.buyer.phone || !form.buyer.mail
  return (
    <div className="form-container">
        <form onSubmit={handlerForm}>
            <div className="mb-3">
                <label for="name" className="form-label" >Nombre</label>
                <input onChange={handlerChange} value={form.buyer.name} type="text" name="name" className="form-control error" />
            </div>
                <div className="mb-3">
                <label for="phone" className="form-label" >Telefono</label>
                <input onChange={handlerChange} value={form.buyer.phone} type="number" name="phone" className="form-control error" pattern="[0-9]+" />
            </div>
                <div className="mb-3">
                <label for="mail" className="form-label" >Email</label>
                <input onChange={handlerChange} value={form.buyer.mail} type="mail" name="mail" className="form-control error" />
            </div>
            <button disabled={validateFields()} type="submit" className="btn btn-primary">Comprar</button>
        </form>
      </div>
  )
}

export default CheckOut