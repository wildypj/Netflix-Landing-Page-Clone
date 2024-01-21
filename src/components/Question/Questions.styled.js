import styled from "styled-components";
import { Container } from "../../GlobalStyle";
import { IoIosAdd } from "react-icons/io";
import {FaTimes} from 'react-icons/fa';
import Form from "../Form/Form";
import { FormContainer } from "../Form/Form.styled"


export const Quest = styled.section`
    height: 80vh;
    background: #000;
    color: #fff;
    border-bottom: 7px solid #414141;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    @media screen  and (max-width: 1276px) {
        padding-top: 40px;
        height: ${({expanded}) => (expanded ? '100%' : '10vh')};
    }
    
`

export const QuestionContainer = styled(Container)`
     @media screen  and (max-width: 1276px) {
        margin-left: 30px;
        margin-right: 30px;
    }
    ${Container}
`

export const QuestionHeader = styled.div`
    text-align: center;
    font-size: 23px;
    font-weight: 700;
`

export const Questions = styled.button`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 20px;
    font-weight: 100;
    border-radius: 1px;
    border: none;
    background: #3B3838;
    padding: 23px 20px;
    width: 100%;
    cursor: pointer;
    transition: background 0.3s ease;

    h3{
        margin-left: 5px;
    }
`

export const Desc = styled.div`

  
    color: #fff;
    font-size: 20px;
    font-weight: 100px;
    height: auto;
    background-color: #3B3838;
    margin-top: 2px;
    padding: 20px 20px;
    height: auto;
   

`

export const IosAdd = styled(IoIosAdd)`
    font-size: 25px;
    font-weight: 900;
`
export const Times = styled(FaTimes)`
    font-weight: 100;
`
export const FormCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 45px;
    margin-bottom: 20px;
    
    @media screen and (max-width: 1276px){
        width: 80%;
        /* align-items: center;  */
    }
`

export const StyledForm = styled(Form)`
    /* @media screen and (max-width: 1276px){
        align-self: center;
        justify-self: center;
    } */
`