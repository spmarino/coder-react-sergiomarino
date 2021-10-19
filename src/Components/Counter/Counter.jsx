import { React, useState } from 'react'
import {Button, Nav, H2, ButtonCancel} from './CounterStyle'
import Swal from 'sweetalert2'


const Counter = ({Stock}) => {

    const [Count, setCount] = useState(0);
    const [show, setShow] = useState(true);

  

    const add = () => {if(Count < Stock)setCount(Count + 1);}
    const subtract = () =>{if(Count > 0)setCount(Count - 1);}


    return (
        <div>
            {show? 
            <Nav>

            <Button onClick={subtract}>  -  </Button><H2>  {Count}  </H2><Button onClick ={add}>  +  </Button>
                        
                
            </Nav>
            

            : null}
        
{show? <Button onClick={() =>setShow(!show)}> Add to Cart </Button>: 

<ButtonCancel onClick={() =>setShow(!show)}> Cancel </ButtonCancel>}
        </div>
    )
}

export default Counter
