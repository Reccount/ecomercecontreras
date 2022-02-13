import React, { useEffect, useState } from 'react';
import ItemDetail from './../ItemDetail/ItemDetail.jsx'

const data = 
    {id:3, 
    categoria: "Guitarra Electrica",
    Price : 18000, 
    stock : 5,
    img:'https://http2.mlstatic.com/D_NQ_NP_605705-MLA26494399046_122017-O.jpg',
    title:'Gibson',
    des:'descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm ',
    shortdesc:'descripcion corta '}
        ;

const tarea = new Promise ((resolve)=> {
    setTimeout(()=>resolve(data),5000)
})

function ItemDetailContainer() {
    const [detalle, setDetalle] = useState();
    
    useEffect(() => {
        tarea.then(result=>
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