


function ListContainer(props) {
    const {title}= props;
    return (
    
    <div className="neo-container list-container">
        <div className="ex region-out list-container-children">
            <h1>{title}</h1>
        </div>
        
    </div>
  );
}
export default ListContainer;
