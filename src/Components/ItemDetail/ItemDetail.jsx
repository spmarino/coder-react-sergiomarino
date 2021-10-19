import {React, useState} from 'react'
import Counter from '../Counter/Counter'
import{DivCard, Img, List, DivContainer,Title, Button, ButtonCancel} from './ItemDetailStyle'


const ItemDetail = ({Item}) => {

const {image, name, gender, species, status} = Item

const [show, setShow] = useState(true)

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
        
{show? <Counter Stock ={7}/> : null}
        
{show? <Button onClick={() =>setShow(!show)}> Add to Cart </Button>: 

<ButtonCancel onClick={() =>setShow(!show)}> Cancel </ButtonCancel>}
        
        
             </DivContainer>
        </DivCard>
    )
}

export default ItemDetail
