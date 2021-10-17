import { React, useState } from 'react'



const Counter = ({Stock}) => {

    const [Count, setCount] = useState(0);

    const add = () => {if(Count < Stock)setCount(Count + 1);}
    const subtract = () =>{if(Count > 0) setCount(Count - 1);}

    return (
        <div style={{textAlign: "center"}}>
            
            <nav>
            <button onClick={subtract}>  -  </button>
                <button onClick ={add}>  +  </button>
                
            </nav>
            <h2>{Count}</h2>
        </div>
    )
}

export default Counter
