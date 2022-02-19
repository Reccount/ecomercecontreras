import Carta from '../Carta/Carta.jsx'

function ItemList({itemData}) {
  return <>
        <div className="neo-container list-container">
            <div className="list-container col-12">
                <div className="list-container-children col-12 row">
                   {itemData && itemData.map( (item)=>{return <Carta itemData={item} key={item.id}/>} )}
                </div>
            </div>
        </div>
  </>;
}

export default ItemList;
