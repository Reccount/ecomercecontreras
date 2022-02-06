import Carta from '../components/Carta/Carta.jsx'

function ListContainer(props) {
    const {title}= props;
    return (
        <div className="neo-container list-container">
            <h1>{title}</h1>
            <div className="list-container">
                <div className="list-container-children">
                <Carta></Carta>
                </div>
            </div>
        </div>
  );
}
export default ListContainer;
