import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import {Button, Nav, H2, ButtonCancel} from './CounterStyle'



const Counter = ({Stock, Initial, OnAdd}) => {


    const [Count, setCount] = useState(Initial);
    const [show, setShow] = useState(true);

  

    const add = () => {if(Count < Stock)setCount(Count + 1);}
    const subtract = () =>{if(Count > 0)setCount(Count - 1);}
    
    const AddtoCart =()=>{
        OnAdd(Count)
        setShow(false)
    }


    return (
        <div>
            
            <Nav>

            <Button onClick={subtract}>  -  </Button><H2>
                  {Count}  </H2>
                  <Button onClick ={add}>  +  </Button>
                        
                
            </Nav>
            

            {show?       
 <Button onClick={AddtoCart}> Add to Cart </Button>:
 
 <Link to='/cart'><ButtonCancel> Cart </ButtonCancel></Link>}








        </div>
    )
}

export default Counter
