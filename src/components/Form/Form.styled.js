
import styled from "styled-components";
import { IoIosArrowForward } from 'react-icons/io'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
  
    h3 {
        font-weight: 400;
    }

    form {
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        @media screen and (max-width: 1276px){
            flex-direction: column;
        }
            
    }

    button {
        /* margin-top: 10px; */
        border: none;
        color: #fff;
        background-color: rgba(255,0,0);
        border-radius: 4px;
        /* height: 50px; */
        font-size: 20px;
        font-weight: 600;
        padding: 12px 24px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 1276px){
            margin-top: 10px;
        }

    &:hover {
        background-color: rgb(153, 22, 29);
    }
    }  
`;


export const StyledInput = styled.div`
    display: flex;
    border: solid 2px lightgrey;
    background: transparent;
    /* border-radius: 4px; */
    background-color: rgba(0,0,0, 0.6);
    border: none;
    height: 50px;
    width: 30%;
    margin-right: 10px;
    outline: 0;
    transition: border 0.3s;

    @media screen and (max-width: 1276px){
            width: 100%;
        }

    &:focus-within {
        border: 2px solid white;
        border-radius: 4px;
    }

    input {
        background: transparent;
        border-radius: 4px;
        height: 100%;
        width: 100%;
        color: lightgray;
        font-size: 20px;

    }

    label {
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: 0;
        pointer-events: none;
    }
`;

export const BtnIcon = styled(IoIosArrowForward)`
    font-size: 25px;
    font-weight: 400;
`;


