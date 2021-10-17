import React from 'react'
import ImageItem from '../../images/blue.png'
import Counter from '../Counter/Counter'

const Item = ({ProductName, Stock, Id, Category }) => {
    return (
        <div style={{textAlign: "center"}}>
            <h4>Id {Id}</h4>
            <h2>{ProductName}</h2>
            <img style ={{weight:"150px", height: "300px"}}src={ImageItem} alt="imageItem" />
            <h5>Stock {Stock}</h5>
            <Counter Stock={Stock}/>
        </div>
    )
}

export default Item
