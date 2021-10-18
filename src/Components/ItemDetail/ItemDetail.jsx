import React from 'react'
import Counter from '../Counter/Counter'

const ItemDetail = ({Item}) => {

const {image, name, gender, species, status} = Item

    return (
        <div style ={{textAlign:"center"}}>
         <img src={image} alt="" />
        <h3>{name}</h3>
        <ul>
            <li>Gender: {gender}</li>
            <li>Specie: {species}</li>
            <li>Status: {status}</li>
            <li>Stock:  7</li>
            <li>Price: $500</li>
            
        </ul>

        <Counter Stock ={7}/>
        <button>Add to Cart</button>
             
        </div>
    )
}

export default ItemDetail
