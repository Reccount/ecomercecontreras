// import ItemList from './ItemList'

function ListContainer({children}) {
    return (
        <div className="neo-container list-container">
            <div className="list-container col-12">
                <div className="list-container-children col-12 row">
                {children}
                </div>
            </div>
        </div>
  );
}
export default ListContainer;
