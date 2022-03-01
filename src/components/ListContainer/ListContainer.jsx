import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import {useParams} from "react-router-dom"
import {getAllGitars} from "../../firebase/firebase"

function ListContainer() {
  
    const [item, setItem] = useState();
    const param = useParams()
    

    useEffect(() => {
      let request = getAllGitars();
      
      request.then(result=>
        {
          if(param.category){
            let filtrado = result.filter(filtered => filtered.category === param.category)
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

