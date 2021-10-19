import React from 'react'
import Counter from '../Counter/Counter'
import{DivCard, Img, List, DivContainer,Title, Button} from './ItemDetailStyle'

const ItemDetail = ({Item}) => {

const {image, name, gender, species, status} = Item

    return (
        <DivCard>
         <Img src={image} alt="" />
        <DivContainer>
        <Title>{name}</Title>

        <List>
            <li>Gender: {gender}</li>
            <li>Specie: {species}</li>
            <li>Status: {status}</li>
            <li>Stock:  7</li>
            <li>Price: $500</li>
            
        </List>

        <Counter Stock ={7}/>
        <Button>Add to Cart</Button>
             </DivContainer>
        </DivCard>
    )
}

export default ItemDetail
