import {React} from 'react'
import Counter from '../Counter/Counter'
import{DivCard, Img, List, DivContainer,Title} from './ItemDetailStyle'
import {UseCartContext} from '../Context/CartContext'



const ItemDetail = ({Item}) => {
const {image, name, gender, species, status} = Item



const {AddItem} = UseCartContext()


const OnAdd =(Quantity)=>{
    AddItem({Item: Item, Quantity: Quantity})
}

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

<Counter Initial={1} Stock ={7} OnAdd={OnAdd}/> 
        

        
        
             </DivContainer>
        </DivCard>
    )
}

export default ItemDetail
