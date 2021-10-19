import React from 'react'
import {Nav,Title} from './LayoutStyle'


const Layout = ({children, id}) => {
    return (
        <Nav>
            {id?<Title>Gender: {id}</Title>:null}
    {children}
        </Nav>
    )
}

export default Layout
