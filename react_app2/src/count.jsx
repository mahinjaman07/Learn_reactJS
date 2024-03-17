import { useState } from "react"

export default function Counter(){
    const countStyle = {
        border: '1px solid yellow',
        padding: '20px',
        margin: '20px',
        textAlign: 'center'
    }
    const [count, setCount] = useState(0);
    const add = () =>{
        let newCount = count + 1;
        setCount(newCount);
    }
    const reduce = ()=>{
        
        let newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={countStyle}>
            <h3>Count:- {count}</h3>
            <button onClick={add}>Add</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}