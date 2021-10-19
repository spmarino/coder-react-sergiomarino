import { React, useState } from 'react'
import {Button, Nav} from './CounterStyle'


const Counter = ({Stock}) => {

    const [Count, setCount] = useState(0);
   

    const add = () => {if(Count < Stock)setCount(Count + 1);}
    const subtract = () =>{if(Count > 0)setCount(Count - 1);}


    return (
        <div>
            
            <Nav>

            <Button onClick={subtract}>  -  </Button><h2>  {Count}  </h2><Button onClick ={add}>  +  </Button>
              
                
            </Nav>
            
        </div>
    )
}

export default Counter
