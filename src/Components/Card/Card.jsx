import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({character}) => {

const {image, name, gender, species, status, location, id} = character

    return (
        <div>
           <img src={image} alt={name} />
           <div>
               <Link to ={`/character/${id}`}>{name}</Link>
               <ul>
                   <li><b>Genre:</b> {gender}</li>
                   <li><b>Species</b> {species}</li>
                   <li><b>Status:</b> {status}</li>
                   <li><b>Location:</b> {location.name}</li>
               </ul>

           </div>
        </div>
    )
}

export default Card
