import React from 'react'
import {DivCard, Img, NavLink, List, ImgContainer, DivList} from './CardStyle'


const Card = ({character}) => {

const {image, name, stock, price, id} = character

    return (
        <DivCard>
            <ImgContainer>
            <Img src={image} alt={name} />
            </ImgContainer>
           
           <DivList>
               
               <NavLink to ={`/item/${id}`}>{name}</NavLink>
               <ul>
                   <List><b>Price:</b> {price}</List>
                   <List><b>Stock:</b> {stock}</List>
                   
               </ul>

           </DivList>
        </DivCard>
    )
}

export default Card
