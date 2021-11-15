import styled from "styled-components";

export const Form = styled.form`
margin-bottom: 1rem;

`
export const Input = styled.input `
     border: thin solid #dedede;
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1;
  background-color: transparent;
`

export const Button = styled.input `
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin: 20px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    border: 1px solid black;
  }
  
  `

  export const Err = styled.p `
  font-weight: bold;
  color: #dc3545;`

  export const Title = styled.h2 `
    color: #256ce1;
    margin: 10px;
  `