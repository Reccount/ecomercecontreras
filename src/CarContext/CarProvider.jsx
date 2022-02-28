import React, {createContext,useState} from 'react'


export const CarContext = createContext({});

function CarProvider({children}) {
    const [car,setCar] = useState([]);
    const [carq,setCarq] = useState([]);
    const [total,setTotal] = useState(0);
    
    
    const faddCar=(item,quantity)=>{
       
        if(fitemExist(item)===false){
            item && setCar([...car,item]);
            setCarq([...carq,quantity])
            setTotal(total + (quantity.nitem * item.Price) )
        }
        
        let goCar = document.getElementById('goCar'),
            addCar= document.getElementById('addCar'),
            contadorCont= document.getElementById('contadorCont');
            
            goCar.classList.remove("hide");
            addCar.classList.add("hide");
            contadorCont.classList.add("hide");
        
    }

    const fremoveCar=(item)=>{
        const id = item.id;
        const price = item.Price;
        let  quantity = carq.find( one => one.id === id),
             clear = car.filter(filtered => filtered.id != id),
             clearq = carq.filter(filtered => filtered.id != id),
             sustraction
            
             sustraction= quantity.nitem * price;
            
            setTotal(total - sustraction)
            setCar(clear)
            setCarq(clearq)
        
        let item_to_hide = document.getElementById(id);

        item_to_hide.classList.add("hide");
        
    }

    const fitemExist =(item)=>{
        
        if(car.includes(item)){
            return true;
        }else{
            return false;
        }
    
    }
    const fclearAll =()=>{
        setCar([])
        setCarq([])
        let item_to_hide = document.querySelectorAll('.car-item ');
        
        item_to_hide.forEach(function(element) {
            element.classList.add("hide");
          });
    }
    console.log(car)
    console.log(carq)
    console.log(total);
    
    return (
        <CarContext.Provider value={{faddCar,fremoveCar,fclearAll,car,carq,total}}>
            {children}
        </CarContext.Provider>
  )
}

export default CarProvider