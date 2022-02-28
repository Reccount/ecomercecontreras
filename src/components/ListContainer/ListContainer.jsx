import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import {useParams} from "react-router-dom"


const data = [
  { 
    id:0, 
    categoria: "Electrica",
    Price : 4000, 
    stock : 38,
    img:'https://sc1.musik-produktiv.com/pic-010131765xxl/gibson-custom-shop-1960-les-paul-standard-light-aged.jpg',
    title:'Gibson',
    des:'descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm ',
    shortdesc:'descripcion corta '
  },
  { 
    id:1, 
    categoria: "Electrica",
    Price : 7000, 
    stock : 39,
    img:'data:image/jpeg;base64,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',
    title:'Epiphone',
    des:'descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm ',
    shortdesc:'descripcion corta '
  },
  {
    id:2, 
    categoria: "Electrica",
    Price : 8000, 
    stock : 41,
    img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/014-4502-513-1-b1-d933d88271a36463e816055430448957-640-0.jpg',
    title:'Fender',
    des:'descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm ',
    shortdesc:'descripcion corta'
  },
  {
    id:3, 
    categoria: "Electrica",
    Price : 18000, 
    stock : 5,
    img:'https://http2.mlstatic.com/D_NQ_NP_605705-MLA26494399046_122017-O.jpg',
    title:'Gibson',
    des:'descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm ',
    shortdesc:'descripcion corta '
  },
  {
    id:4, 
    categoria: "Acustica",
    Price : 4000, 
    stock : 5,
    img:'https://es.yamaha.com/es/files/L-Series_540x540_8018f051213ab8c342096956c53e376a.jpg?impolicy=resize&imwid=396&imhei=396',
    title:'Yamaha',
    des:'descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm ',
    shortdesc:'descripcion corta '
  },
  {
    id:5, 
    categoria: "Acustica",
    Price : 4000, 
    stock : 5,
    img:'http://d2r9epyceweg5n.cloudfront.net/stores/152/693/products/71medgi800l-_sy879_1-3ad011363990fe739c15596632457104-640-0.jpg',
    title:'Yamaha',
    des:'descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm ',
    shortdesc:'descripcion corta '
  },
  {
    id:6, 
    categoria: "Acustica",
    Price : 4000, 
    stock : 5,
    img:'https://daiammusica.com.ar/wp-content/uploads/2020/04/guitarra-acustica-gibson-j-45-vintage-D_NQ_NP_856708-MLA26541001236_122017-Q-2-1.jpg',
    title:'Gibson',
    des:'descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm ',
    shortdesc:'descripcion corta '
  }
  ,
  {
    id:7, 
    categoria: "Electrica",
    Price : 4000, 
    stock : 5,
    img:'https://http2.mlstatic.com/D_NQ_NP_721503-MLA43504505236_092020-W.jpg',
    title:'Crimson',
    des:'descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm descripcion larga lorem ipsumm ',
    shortdesc:'descripcion corta '
  }
];

const tarea = new Promise ((resolve)=> {
  setTimeout(()=>
  resolve(data)
    ,1500)
})

function ListContainer() {
  
    const [item, setItem] = useState();
    const param = useParams()
    

    useEffect(() => {
        tarea.then(result=>
        {
          if(param.category){
            let filtrado = result.filter(filtered => filtered.categoria === param.category)
            setItem(filtrado);
          }else{
            setItem(result);
          }
          
        })
    }, [param.category]);
    
    
    
    
  return (
        <>
        <ItemList itemData={item}/>
        </>
  );
}
export default ListContainer;

