import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const DivCard = styled.div `
width: 15%;
border: 3px solid black;
background-color: #256ce1;
border-radius: 20px;
padding: 20px;
margin: 20px;
text-align: center;
height: 400px;
color:white;



&:hover {
    transition: all 0.5s ease-in-out;
    box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.4);
    background-color: white;
    color: Black;
}

@media screen and (max-width: 1024px) {
    width: 20%;
}

@media screen and (max-width: 768px) {
    width: 25%;
}

@media screen and (max-width: 650px) {
    width: 60%;
    height: 600px;
}

`
export const Img = styled.img`
width: 100%;
max-height: 100%;
border-radius: 20px;
margin: auto;
`
export const ImgContainer = styled.div `
background-color: white;
width: 100%;
display: flex;
justify-content: center;
height: 70%;
border-radius: 20px;
flex-wrap: wrap;
margin:auto;

`

export const NavLink = styled(Link)`
text-decoration: none;
font-weight: bold;
color: #98d40d;

`

export const List = styled.ul `
list-style: none;
text-align: left;
margin: auto; 
`
export const DivList = styled.div `
padding:5%;
`