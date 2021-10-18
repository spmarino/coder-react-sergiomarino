import React from 'react'

const ItemDetail = ({character}) => {

const {image, name, gender, species, status, location} = character

    return (
        <div>
           <img src={image} alt={name} />
           <div>
               <h3>{name}</h3>
               <ul>
                   <li style = {{color:"red"}}><b>Genre:</b> {gender}</li>
                   <li><b>Species</b> {species}</li>
                   <li><b>Status:</b> {status}</li>
                   
               </ul>

           </div>
        </div>
    )
}

export default ItemDetail
