import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';


function CartWidget() {
    return (
        <Link to="/cart" style={{display:"flex"}}>
           
            <FaCartPlus color = "#fff"/>
            
        </Link>
    )
}

export default CartWidget
