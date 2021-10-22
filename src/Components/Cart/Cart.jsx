import { UseCartContext } from "../Context/CartContext";

import React from 'react'

const Cart = () => {
    const{CartList} = UseCartContext()
    return (
        <div>
            <h2>Carrito</h2>
            {CartList.map(item => <h2 key={item.Item.id}>Name:{item.Item.name}              Quantity:{item.Quantity}</h2>)}
            {console.log(CartList)}
        </div>
    )
}

export default Cart
