import React from 'react'
import { Nav, NavBarContainer, NavLogo, NavButton , BtnWrapper, LangBtn2, FGlobe} from './Navbar.styled'
import logo from './../../images/Netflix-Logo.png'
import {IoMdArrowDropdown} from 'react-icons/io'

function NavBar() {
  return (
   <Nav>
      <NavBarContainer>
        <NavLogo>
            <img src={logo} alt='Netflix Logo'/>
        </NavLogo>
        <BtnWrapper>
            <LangBtn2>
                <FGlobe />
                <select name="Language" >
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                </select>
            </LangBtn2>
            
            {/* <LangBtn> <FiGlobe /> English <IoMdArrowDropdown/></LangBtn> */}
            <span />
            <NavButton>Sign In</NavButton>
        </BtnWrapper>
      </NavBarContainer>
   </Nav>
  )
}

export default NavBar