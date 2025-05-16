import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [ items,setItems ] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

    const setAndSaveNewItem = (newItems) => {
        setItems(newItems);
        localStorage.setItem('shoppinglist', JSON.stringify(newItems))
    }

    const [newItem, setNewItem] = useState('');
    const [search,setSearch ] = useState('')

    const addItem = (item) => {
        const id = items.length ? items[items.length -1].id + 1 : 1;
        const myNewItem = { id, checked: false, item};
        const listItems = [...items,myNewItem];
        setAndSaveNewItem(listItems);
    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setAndSaveNewItem(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setAndSaveNewItem(listItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newItem) return;
        console.log(newItem)
        addItem(newItem)

        setNewItem('')
    }

  return (
    <div className="App">
        <Header title="Grocery List"/>

        <AddItem 
            newItem = {newItem}
            setNewItem = {setNewItem}
            handleSubmit = {handleSubmit}
        />

        <SearchItem
            search={search}
            setSearch = {setSearch}
        />

        <Content 
        items= { items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase())) }
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
        
        <Footer length = {items.length}/>
    </div>
  );
}

export default App;
