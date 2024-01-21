import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
`

export const Container = styled.div`
    margin-left: 150px;
    margin-right: 150px;
`

export const Button = styled.button`
    border-radius: 5px;
    background: red;
    color: #fff;
    cursor: pointer;
    border: none;
    font-size: 20px;

    &:hover{
        transition: 0.3s ease-in-out;
        color: black;
    }
`

