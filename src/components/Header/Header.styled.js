

import styled from "styled-components";
import ImgBg from '../../images/Heading-background.jpg';

export const HeaderStyled = styled.header`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 1276px){
        
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; /* Use align-items instead of align-content */
    text-align: center;
    height: calc(100vh - 90px); /* Consistent units */

    @media screen and (max-width: 1276px){
        height: calc(70vh - 90px);
    }
`;

export const HeaderContent = styled.div`
    height: 300px;
    width: 80%;
    color: #fff;
    margin-top: 150px;

    h1 {
        font-size: 48px;
        font-weight: 900;
        margin-bottom: 1rem;
    }

    h3 {
        margin-bottom: 1rem;
    }
`;




