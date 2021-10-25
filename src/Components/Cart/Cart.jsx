import { UseCartContext } from "../Context/CartContext";
import React from 'react'
import CartItem from "../CartItem/CartItem";
import { DivCart, Title, EmptyButton } from "./CartStyle";

const Cart = () => {
    const{CartList, EmptyCart} = UseCartContext()


    return (
        <div>
            <Title>Cart</Title>
            <DivCart>
            {CartList.map(item => <CartItem key={item.Item.id}
            Item ={item.Item} Quantity={item.Quantity}/>)
            }
            </DivCart>
       
            <EmptyButton onClick={EmptyCart}>Empty Cart</EmptyButton>

            
            
       
            {console.log(CartList)}
        </div>
    )
}

export default Cart
