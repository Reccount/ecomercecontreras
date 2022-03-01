import React, {createContext,useState} from 'react'


export const CarContext = createContext({});

function CarProvider({children}) {
    const [car,setCar] = useState([]);
    
    const faddCar=(item,quantity)=>{
        if(fitemExist(item)===false){
            item && setCar([...car,{...item,quantity:quantity.nitem}]);
        }
    }

    const fremoveCar=(item)=>{
        const id = item.id;
        let  clear = car.filter(filtered => filtered.id !== id);
        setCar(clear)
    }

    const fitemExist =(item)=>{
        return car.some( (itemInCar) => itemInCar.id === item.id)
    }
    
    const fgetQuantity =()=>{
        let total=0
        car.forEach(itemInCar=>{
            total+=itemInCar.quantity;
        })
        return total;
    }
    
    const fgetTotalPrice =()=>{
        let totalPrice=0
        car.forEach(item=>{
            totalPrice +=item.price * item.quantity;
        })
        return totalPrice;
    }
    
    const fclearAll =()=>{
        setCar([])
        let item_to_hide = document.querySelectorAll('.car-item ');
        
        item_to_hide.forEach(function(element) {
            element.classList.add("hide");
          });
    }
    
    return (
        <CarContext.Provider value={{faddCar,fremoveCar,fclearAll,fgetQuantity,fgetTotalPrice,fitemExist,car}}>
            {children}
        </CarContext.Provider>
  )
}

export default CarProvider