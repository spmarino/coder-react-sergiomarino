import {React} from 'react'
import Counter from '../Counter/Counter'
import{DivCard, Img, List, DivContainer,Title} from './ItemDetailStyle'
import {UseCartContext} from '../Context/CartContext'



const ItemDetail = ({Item}) => {
const {image, name, stock, description, price} = Item



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
            <li>Description: {description}</li>
            <li>Stock:  {stock}</li>
            <li>Price: {price}</li>
            
        </List>

<Counter Initial={1} Stock ={stock} OnAdd={OnAdd} /> 
        

        
        
             </DivContainer>
        </DivCard>
    )
}

export default ItemDetail
