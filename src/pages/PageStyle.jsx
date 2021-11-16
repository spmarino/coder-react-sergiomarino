import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom'

export const DivContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h1 `
width: 100%;
color: #256ce1;
padding: 30px;
text-align: center;
`

export const NavLink = styled(Link)`
text-decoration: none;
    color: #256ce1;
    width:100%;
    font-size: 1.5em;
    padding: 10px;

    &:hover{
        transition: all 0.2s ease-in-out;
        color: #98d40d;
    }
`

export const Img2 = styled.img `
width: 150px;
height: 150px;

`

export const Body = styled.p `
width: 80%;
`

export const Ul = styled.ul `
list-style: none;

`

export const A = styled.a `
color:Black;
text-decoration:none;
margin-top:10px;
`