import { useRef } from "react";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            type="text"
            autoFocus
            ref={inputRef}
            id="addItem"
            placeholder="Add Item"
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type="submit"
            aria-label="Add item"
            onClick={() => inputRef.current.focus()}
        ><i className="fas fa-plus"></i></button>
    </form>
  )
}

export default AddItem;