//import './App.css';
// get our fontawesome imports
import React, { useEffect, useState, useContext } from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {CarContext} from "../../CarContext/CarProvider"



function CarWidget(props) {
  const {car} = useContext(CarContext)
  
  return (
    <div className="neo-container">
      <Link to={"/cart"}>
        <div className="ex region-out car-widget btn-remove">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>{car.length}</span>
        </div>
      </Link>
    </div>
  );
}
export default CarWidget;