import React from 'react'
import { FooterContainer, FooterStyled, FootHeader, FooterLinks } from './Footer.styled'

function Footer() {
  return (
    <FooterStyled>
        <FooterContainer>
           <FootHeader> <p>Questions? Call <a>1-844-505-2993</a></p></FootHeader>
            <FooterLinks>
                <ul>
                    <li><a>FAQ</a></li>
                    <li><a>Media Center</a></li>
                    <li><a>Netflix Shop</a></li>
                    <li><a>Netflix Shop</a></li>
                    <li><a>Ways to Watch</a></li>
                    <li><a>Cookie Preferences</a></li>
                    <li><a>Speed Test</a></li>
                    {/* <li><a>Do Not Sell or Share My personal Information</a></li> */}
                    <li><a>Only on Netflix</a></li>
                    <li><a>Help Center</a></li>
                    <li><a>Investor Relations</a></li>
                    <li><a>Redeem Gift Cards</a></li>
                    <li><a>Terms of Use</a></li>
                    <li><a>Corporate Information</a></li>
                    <li><a>Legal Notices</a></li>
                    <li><a>Account</a></li>
                    <li><a>Jobs</a></li>
                    <li><a>Buy Gift Cards</a></li>
                    <li><a>Privacy</a></li>
                    <li><a>Contact Us</a></li>
                    {/* <li><a>Only on Netflix</a></li> */}
                    <li><a>Do Not Sell or Share My personal Information</a></li>
                </ul>
            </FooterLinks>
           
        </FooterContainer>
    </FooterStyled>
  )
}

export default Footer