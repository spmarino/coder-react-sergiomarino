import React from 'react'
import { UseCartContext } from "../Context/CartContext";
import {DivItem, Img, DelButton, Titles} from "./CartItemStyle"

const CartItem = ({Item, Quantity}) => {
    const{DelItem} = UseCartContext()
    const {image, name, id, price} = Item
    
    const Total = (price * Quantity)

    return (
        
       
        <DivItem>
        <Img src={image} alt={name} />
        <Titles>{name}</Titles>
        <Titles> {Quantity} Units</Titles>
        <Titles> U$D {Total}</Titles>
        <DelButton onClick={() => DelItem(id)}>X</DelButton>
        
        {console.log(Item)}
        </DivItem>
       
        

            
    
    )
}

export default CartItem
