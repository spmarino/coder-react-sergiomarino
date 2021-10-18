import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from '../NavbarElements'



const nav = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>Logo</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/Categories" >
                        Categories
                    </NavLink>
                    <NavLink to="/services" >
                        services
                    </NavLink>
                    <NavLink to="/contact-us" >
                        Contact Us
                    </NavLink>
                    <NavLink to="/sign-up" >
                        Sign Up
                    </NavLink>
                    <CartWidget />
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>               
            </Nav>

        </>
    )
}

export default nav
