import styled from "styled-components";

export const DivCart = styled.div`
display: flex;
flex-direction: column ;
width: 100%;
padding: 2%;
justify-content: center;
`
export const Title = styled.h2 `
font-size: 2em;
text-align: center;
width: 100%;
color: #256ce1;

`

export const EmptyButton = styled.div `
background-color: #e12525;
color: white;
font-size: 1.5em;
border-radius: 5px;
text-align: center;
cursor: pointer;
border: solid 2px white;
width: 10%;
margin: 1% 3%;
padding: 10px;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #e12525;
border: solid 2px #e12525}
`

export const DivContainer = styled.div `
text-align: center;
padding: 30px;

`
