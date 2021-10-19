import React from 'react'

import { DivContainer, Title, NavLink } from './PageStyle'

const Categories = () => {
    return (
        <DivContainer>

            <Title>Categories</Title>
           
            
                <NavLink to ={`/category/male`}>Gender: Male</NavLink>
                <NavLink to ={`/category/female`}>Gender: Female</NavLink>
            
        </DivContainer>
    )
}

export default Categories
