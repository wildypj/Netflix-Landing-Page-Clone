import styled from "styled-components";
import { Container } from "../../GlobalStyle";
import imagebg from "../../images/mobile-1.jpg"

export const ShowCaseContainer = styled.div`
    background: #000;
    height: 80vh;
    color: #fff;
    border-bottom: 7px solid #414141;
   
`

export const Row = styled(Container)`
    display: flex;
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

export const ColumnTwo = styled.div`
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
    background: url(${imagebg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 570px 400px;
`

export const ImgWrapper = styled.div`
    height: 70vh;
    max-height: 400px;
    max-width: 555px;
    padding-top: 260px;
    padding-left: 90px;
    /* display: inline-block; */
    /* justify-content: center; */

    @media screen and (max-width: 960px){
           
            
    }
`


export const ImgWrapperTwo = styled.div`
    background-color: #000;
    border-radius: 7px;
    border: 2px solid #3B3838;
    height: 13vh;
    max-width: 320px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 960px){
        /* max-width: 100%; */
    }
`

export const TextWrapper = styled.div `
    height: 19px;
    width: 100px;
    padding-bottom: 40px;
`
export const Smheading = styled.h3`
    font-weight: 600;
    font-size: 13px;
    /* display: inline-block; */
    justify-self: stretch;
`

export const SmDescription = styled.p`
    color: blue;
    font-weight: 300;
`

export const SmImg = styled.img`
    height: 72px;
    width: 50px;
    display: inline-block;
`
export const SmImgTwo = styled.img`
    height: 72px;
    width: 50px;
    display: inline-block;
`


