import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [ items,setItems ] = useState([
        {
            id:1,
            checked:true,
            item: 'one half pound bag of cocoa covered'
        },
        {
            id:2,
            checked: false,
            item: 'Item 2'
        },
        {
            id:3,
            checked: false,
            item: 'Item 3'
        }
    ]);

    const handleCheck = (id) => {
        const LineItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setItems(LineItems);
        localStorage.setItem('shoppinglist', JSON.stringify(LineItems))
    }

    const handleDelete = (id) => {
        const LineItems = items.filter((item) => item.id !== id)
        setItems(LineItems);
        localStorage.setItem('shoppinglist', JSON.stringify(LineItems))
    }

  return (
    <div className="App">
     <Header title="Grocery List"/>
     <Content 
      items= { items }
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
     />
     <Footer length = {items.length}/>
    </div>
  );
}

export default App;
