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
color: #256ce1;
justify-content: center;
margin: 10px 0;


`