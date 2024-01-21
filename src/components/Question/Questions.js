import React from 'react'
import { 
  Quest, 
  QuestionContainer, 
  QuestionHeader,
  Questions,
  IosAdd,
  Times,
  Desc,
  FormCont,
  StyledForm

} from './Questions.styled'
import {buttonData} from './questData'
import { useState } from 'react'
import Form from '../Form/Form'


function Question() {
    const [selected, setSelected] = useState(false)

    const toggle = i => {
      if (selected === i)  {
        //if selected is already active, then close it
        return setSelected(null)
      }

      setSelected(i)
    }

  return (
    <Quest expanded={selected !== false}>
      <QuestionHeader>
        <h1>Frequently Asked Questions</h1>
      </QuestionHeader>

        {buttonData.map((item, i) => (
          <QuestionContainer> 
            <Questions onClick={() => toggle(i)} key={i}>
              <p>{item.label}</p> 
              <span>{selected === i ? <Times /> :  <IosAdd />}</span> 
            </Questions>
            {selected === i ? (
              <Desc> <p>{item.answer}</p> </Desc>
            ): null}
            
       
          </QuestionContainer> 
        ))} 
        
      <FormCont>
        <StyledForm />
      </FormCont>
  
    </Quest>
  );
}

export default Question