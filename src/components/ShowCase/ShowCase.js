import React from 'react'
import {
    ShowCaseContainer, 
    Row, 
    Column, 
    Heading, 
    Desc, 
    Img, 
    TextWrapper1,
    ImgWrapper } from './ShowCase.styled'


function ShowCase({
    heading,
    desc,
    img,
    alt,
    imgStart

}) {
  return (
     <ShowCaseContainer>
        <Row imgStart={imgStart}>
            <Column>
            <TextWrapper1>
                <Heading>{heading}</Heading>
                <Desc>{desc}</Desc>
            </TextWrapper1>
            </Column>

            <Column>
                <ImgWrapper>
                    <Img src={img} alt={alt}/>
                </ImgWrapper>
            </Column>
        </Row>
    </ShowCaseContainer>
  )
}

export default ShowCase