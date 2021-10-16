import React from 'react'
import ImageItem from '../../images/blue.png'
import Counter from '../Counter/Counter'

const Item = () => {
    return (
        <div style={{textAlign: "center"}}>
            <img style ={{weight:"150px", height: "300px"}}src={ImageItem} alt="imageItem" />
            <h2>Cantidad 10</h2>
            <Counter stock={10}/>
        </div>
    )
}

export default Item
