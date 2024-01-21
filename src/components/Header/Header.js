import React from 'react'
import { HeaderStyled, HeaderContainer, HeaderContent,FormContainer } from './Header.styled'
import NavBar from '../Navbar/NavBar'
import Form from '../Form/Form'

function Header() {
  return (
    <HeaderStyled>
        <NavBar />
        <HeaderContainer>
            <HeaderContent>
                <h1>Unlimited movies, TV shows, and more</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <Form />
            </HeaderContent>
        </HeaderContainer>
    </HeaderStyled>
  )
}

export default Header