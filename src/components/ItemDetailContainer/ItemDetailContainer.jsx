import React, { useEffect, useState } from 'react';
import ItemDetail from './../ItemDetail/ItemDetail.jsx'
import {useParams} from "react-router-dom"
import {getGuitar} from "../../firebase/firebase"


function ItemDetailContainer() {
    const param = useParams()
    
    const [detalle, setDetalle] = useState();
    
    useEffect(() => {
      let request = getGuitar(param.id);
      
      request.then(result=>
            {
              const detalle = <ItemDetail producData = {result} key={result.id}/>
                setDetalle(detalle);
                
            })
        
    }, []);
    
    return (
    <>{detalle}</>
  )
}

export default ItemDetailContainer