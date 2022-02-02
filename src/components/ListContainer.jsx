


function ListContainer(props) {
    const {nitem}= props;
    return (
    
    <div className="neo-container list-container">
        <div className="ex region-in list-container-children">
            <span>{nitem}</span>
        </div>
        
    </div>
  );
}
export default ListContainer;
