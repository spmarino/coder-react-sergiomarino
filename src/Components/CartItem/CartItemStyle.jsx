import styled from "styled-components";



export const DivItem = styled.div `
display: flex;
flex-wrap: wrap;
border: solid 2px black;
margin: 10px;
padding: 10px;
border: 3px solid black;
background-color: #256ce1;
border-radius: 20px;
color:white;
justify-content: space-between;

&:hover {
    transition: all 0.5s ease-in-out;
    box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.4);
    background-color: white;
    color: Black;
}
`



export const Img = styled.img `
width: 5%;
height: auto;
border-radius: 20px;

`
export const DelButton = styled.button `
background-color: #e12525;
color: white;
font-size: 2em;
border-radius: 150%;
cursor: pointer;
border: solid 2px white;
width: 3%;
margin: 1% 0;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #e12525;
border: solid 2px #e12525}

`
export const Titles = styled.h2 `
    font-size: 2em;
    text-align: center;
`