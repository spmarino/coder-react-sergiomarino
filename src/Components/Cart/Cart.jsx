import { UseCartContext } from "../Context/CartContext";
import React from 'react'
import CartItem from "../CartItem/CartItem";
import { DivCart } from "./CartStyle";

const Cart = () => {
    const{CartList, EmptyCart} = UseCartContext()


    return (
        <div>
            <h2>Carrito</h2>
            <DivCart>
            {CartList.map(item => <CartItem key={item.Item.id}
            Item ={item.Item} Quantity={item.Quantity}/>)
            }
            </DivCart>
       
            <button onClick={EmptyCart}>Empty Cart</button>

            
            
       
            {console.log(CartList)}
        </div>
    )
}

export default Cart
