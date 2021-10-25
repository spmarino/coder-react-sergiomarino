import React from 'react'
import { UseCartContext } from "../Context/CartContext";
import {DivItem, Img, DelButton} from "./CartItemStyle"

const CartItem = ({Item, Quantity}) => {
    const{DelItem} = UseCartContext()
    const {image, name, id} = Item

    return (
        
       
        <DivItem>
        <Img src={image} alt={name} />
        <h2>{name}</h2>
        <h2> {Quantity} Units</h2>
        <DelButton onClick={() => DelItem(id)}>X</DelButton>
        {console.log(Item)}
        </DivItem>
       
        

            
    
    )
}

export default CartItem
