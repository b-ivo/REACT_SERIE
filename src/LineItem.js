const LineItem = ({ item, handleCheck, handleDelete }) => {
    return(
        <li className="item" key={item.id}>
            <input
                type="checkbox"
                onChange={ () => handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                style={item.checked ? {textDecoration: 'line-through'} : {}}
                onDoubleClick={ () => handleCheck(item.id) }
            >{ item.item }</label>
            <button
                onClick={()=> handleDelete(item.id) }
            ><i className="fa fa-trash" aria-label={`Delete ${item.item}`}></i></button>
        </li>
    )
}

export default LineItem;