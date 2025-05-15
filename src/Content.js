import { useState } from "react";

const Content = () =>{
    const [name, setName ] = useState('Ivo')
    const [count, setCount] = useState(0)

    const handleNameChange = () =>{
        const name = ['Ivo','Herve','Kenny','king'];
        const int = Math.floor(Math.random() * 3);
        setName(name[int]);
    }


    const clickHandle = () => {
        setCount(count + 1)
        setCount(count + 1)
        console.log(count);
    }
    const clickHandle2 = (name) => {
        console.log(count);
    }
    const clickHandle3 = (e) => {
        console.log(e.target.innerText);
    }
    
    return (
        <main> 
            <p onDoubleClick={ clickHandle }>
                Hello { name }!
            </p>
            <button onClick={ handleNameChange }>Change name...</button>
            <button onClick={ clickHandle }>Click</button>
            <button onClick={ clickHandle2 }>Click</button>
        </main>
    )
}


export default Content;