//import './App.css';
// get our fontawesome imports
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CarWidget(props) {
  
  return (
    <div className="neo-container">
      <div className="ex region-out car-widget">
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </div>
  );
}
export default CarWidget;