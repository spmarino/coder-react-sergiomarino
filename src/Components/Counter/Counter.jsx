import { React, useState } from 'react'



const Counter = ({stock}) => {

    const [Count, setCount] = useState(0);

    const add = () => {if(Count < stock)setCount(Count + 1);}
    const subtract = () =>{if(Count > 0) setCount(Count - 1);}

    return (
        <div style={{textAlign: "center"}}>
            <h2>Contador</h2>
            <nav>
            <button onClick={subtract}>-</button>
                <button onClick ={add}>+</button>
                
            </nav>
            <h2>{Count}</h2>
        </div>
    )
}

export default Counter
