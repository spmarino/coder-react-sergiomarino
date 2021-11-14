import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Nav, NavLink, Bars, NavMenu } from "../NavbarElements";
import Logo from "../../../images/Logo.png";

const nav = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Categories">Categories</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <CartWidget />
        </NavMenu>
      </Nav>
    </>
  );
};

export default nav;
