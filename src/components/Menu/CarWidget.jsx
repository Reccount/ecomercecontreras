//import './App.css';
// get our fontawesome imports
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

function CarWidget(props) {
  
  return (
    <div className="neo-container">
      <Link to={"/cart"}>
        <div className="ex region-out car-widget">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </Link>
    </div>
  );
}
export default CarWidget;