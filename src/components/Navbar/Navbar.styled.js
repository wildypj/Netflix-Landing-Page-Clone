import styled from "styled-components";
import { Container } from "../../GlobalStyle";
import { FiGlobe } from 'react-icons/fi'

export const Nav = styled.nav`
    background: transparent;
    height: 90px;
    top: 0;
`

export const NavBarContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    z-index: 2;
    

    @media screen  and (max-width: 1276px) {
        /* margin-left: 30px;
        margin-right: 30px; */
        /* padding: 0 20px; */
        margin: 0 10px;

    }
    ${Container}
`
export const NavLogo = styled.div`
    justify-self: start;
    height: 80px;
   
    img{
        height: 80px;
        width: 180px;
    }
    @media screen  and (max-width: 1276px) {
        /* flex: 4; */
        padding-top: 15px;
        img{
            height: 50px;
            width: 110px;
        }
    }
`

export const BtnWrapper = styled.div`
    height: 80px;
    width: 280px;
    justify-self: end;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1276px) {
        /* flex: 2; */
        /* justify-content: space-around; */
    }
    
`

export const NavButton = styled.button`
    border-radius: 4px;
    background-color: rgb(255,0,0);
    /* background-color: rgb(153, 22, 29); color for when hover */ 
    font-weight: 600;
    font-size: 15px;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: rgb(153, 22, 29);
    }
`

export const FGlobe = styled(FiGlobe)`
    color: #fff;
`

export const LangBtn2 = styled.div`
    display: flex;
    border-radius: 4px;
    border: solid 2px #fff;
    justify-content: space-evenly;
    align-items: center;
    width: 130px;
    height: 40px;
    background: grey;
    margin-right: 10px;
    cursor: pointer;

    select{
        border: transparent;
        color: #fff;
        font-size: 15px;
        font-weight: 100;
        width: 90px;
        background: transparent;
    }
`

