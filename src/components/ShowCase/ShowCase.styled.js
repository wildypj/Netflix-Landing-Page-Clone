import styled from "styled-components";
import { Container } from "../../GlobalStyle";

export const ShowCaseContainer = styled.div`
    background: #000;
    height: 80vh;
    color: #fff;
    border-bottom: 7px solid #414141;
`

export const Row = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};

    @media screen  and (max-width: 1276px) {
        margin-left: 30px;
        margin-right: 30px;
    }

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 40px
    }
    ${Container}
`

export const Column = styled.div`
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 960px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const Heading = styled.h1`
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 1rem;

    @media screen and (max-width: 960px){
        font-size: 24px;
    }
`

export const Desc = styled.p`
    font-size: 24px;

    @media screen and (max-width: 960px){
        font-size: 20px;
    }
`

export const TextWrapper1 = styled.div`
  @media screen and (max-width: 960px){
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
    }
`

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 400px;
`

