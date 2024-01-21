import React from 'react'
import { FormContainer, StyledInput, BtnIcon } from './Form.styled'
import { IoIosArrowForward } from 'react-icons/io'

function Form() {
  return (
    <FormContainer>
        <h3>
            Ready to watch? Enter your email
            to create or restart your membership.  
        </h3>
        <form>
            <StyledInput>
              <input type="email" placeholder='Email Address'/>
            </StyledInput>
            {/* <label for="Email Address"></label> */}
            <button>Get Started <BtnIcon /> </button>
        </form>
    </FormContainer>
  )
}

export default Form