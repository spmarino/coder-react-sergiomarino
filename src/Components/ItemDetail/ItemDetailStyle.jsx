import styled from "styled-components";


export const DivCard = styled.div `
width: 90%;
border: 3px solid black;
background-color: #256ce1;
border-radius: 20px;
padding: 20px;
margin: 20px;
text-align: center;
height: auto;
color:white;
display: flex;
flex-wrap: wrap;
padding: 30px;
justify-content: space-between;
align-items: center;



&:hover {
    transition: all 0.5s ease-in-out;
    box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.4);
    background-color: white;
    color: Black;
}

@media screen and (min-width: 768px) {
    width: 70%;
}

@media screen and (min-width: 1024px) {
    width: 60%;
}


`
export const Img = styled.img`
width: 100%;
margin: auto;
height: auto;
border-radius: 20px;



@media screen and (min-width: 768px) {
    width: 40%;
}

@media screen and (min-width: 1024px) {
    width: 40%;
}



`

export const Title = styled.h2`
text-decoration: none;
font-weight: bold;
color: #98d40d;
font-size: 2em;

`

export const List = styled.ul `
list-style: none;
text-align: left;
padding: 10px;
font-size:1.5em;
margin: 1vh;

`
export const DivContainer = styled.div `
width : 100%;
//border: 2px solid black;
padding-top: 20px;

@media screen and (min-width: 768px) {
    width: 40%;
}

@media screen and (min-width: 1024px) {
    width: 40%;
}
`
export const Button = styled.button `
background-color: #256ce1;
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
    color: #256ce1;
border: solid 2px #256ce1}

`


;