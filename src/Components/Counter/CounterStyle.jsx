import styled from "styled-components";


export const Button = styled.button `
background-color: #256ce1;
color: white;
font-size: 1.5em;
padding: 1px 15px;
border-radius: 5px;
cursor: pointer;
border: solid 2px white;
margin: 0px 10px;


&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #256ce1;
border: solid 2px #256ce1}

`;

export const Nav = styled.div `
display: flex;
color: white;
justify-content: center;
margin: 10px 0;


`

export const H2 = styled.h2 `
color: #98d40d;
`


export const ButtonCart = styled.button `
background-color: #08a508;
color: white;
font-size: 1.5em;
padding: 1px 15px;
border-radius: 5px;
cursor: pointer;
border: solid 2px white;
margin: 20px;


&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #08a508;
border: solid 2px #08a508}

`
