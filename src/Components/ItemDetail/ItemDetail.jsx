import React from 'react'
import Counter from '../Counter/Counter'

const ItemDetail = ({Item}) => {

const {image, name, gender, species, status} = Item

    return (
        <div style ={{textAlign:"center"}}>
         <img src={image} alt="" />
        <h3>{name}</h3>
        <ul>
            <li>{gender}</li>
            <li>{species}</li>
            <li>{status}</li>
            <li>Stock 7</li>
            
        </ul>

        <Counter Stock ={7}/>
        <button>Add to Cart</button>
             
        </div>
    )
}

export default ItemDetail
