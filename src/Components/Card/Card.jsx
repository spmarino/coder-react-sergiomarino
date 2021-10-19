import React from 'react'
import {DivCard, Img, NavLink, List} from './CardStyle'


const Card = ({character}) => {

const {image, name, gender, species, status, location, id} = character

    return (
        <DivCard>
           <Img src={image} alt={name} />
           <div>
               
               <NavLink to ={`/item/${id}`}>{name}</NavLink>
               <ul>
                   <List><b>Genre:</b> {gender}</List>
                   <List><b>Species:</b> {species}</List>
                   <List><b>Status:</b> {status}</List>
                   <List><b>Location:</b> {location.name}</List>
               </ul>

           </div>
        </DivCard>
    )
}

export default Card
