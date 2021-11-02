import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { UseCartContext } from "../../Context/CartContext";


function CartWidget() {
    const {IconCart} = UseCartContext();
    return (
        <Link to="/cart" style={{display:"flex"}}>
           
            <FaCartPlus color = "#fff"/>
           
            <p style={{color:"white"}}>{IconCart()} </p>
            
        </Link>
    )
}

export default CartWidget
