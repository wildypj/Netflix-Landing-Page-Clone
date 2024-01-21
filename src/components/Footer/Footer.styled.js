import styled from "styled-components";
import { Container } from "../../GlobalStyle";

export const FooterStyled = styled.section`
    height: 500px;
    background: #000;
    color: #fff;
    /* display: flex; */
`

export const FooterContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    height: 357px;
    width: 910px;
    /* justify-content: space-evenly; */
    /* align-items: center; */

    @media screen and (max-width:900px){
        margin-left: 30px;
        margin-right: 30px;
    }
    ${Container}
`

export const FootHeader = styled.div`
    color: #959494;
    width: 100%;
    margin-bottom: 20px;

    a {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const FooterLinks = styled.div`
    height: 243px;
    /* display: grid; */
    /* grid-template-rows: auto; */
    display: flex;
    width: 100%;
    justify-content: space-between;
   

    ul{
        list-style: none;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        flex-wrap: wrap;

        @media screen and (max-width: 1276px){
            grid-template-columns: repeat(2, 1fr);
            width: 60%;
        }
      
    }
    a {
        cursor: pointer;
        text-decoration: underline;
        color: #C9C9C9;
    }

    @media screen and (max-width: 1200px){
        ul{
            display: grid;
            grid-template-columns: repeat(2, 1);
        }
    }
`