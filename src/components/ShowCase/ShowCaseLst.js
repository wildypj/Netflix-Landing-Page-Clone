import React from 'react'
import {
    ShowCaseContainer, 
    Row, 
    Column, 
    Heading, 
    Desc, 
    ImgWrapper, 
    ImgWrapperTwo,
    SmImg,
    TextWrapper,
    SmImgTwo,
    SmDescription,
    Smheading,
    ColumnTwo,
    TextWrapper1,
    
    
} from './ShowCaseLst.styled'

function ShowCaseLst({
    heading,
    desc,
    img,
    alt,
    imgStart,
    smImg,
    smText,
    smDesc,
    smImgTwo
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

            <ColumnTwo>
                <ImgWrapper>
                    <ImgWrapperTwo>
                        <SmImg src={smImg} />
                        <TextWrapper>
                            <Smheading> {smText} </Smheading>
                            <SmDescription> {smDesc}</SmDescription>
                        </TextWrapper>
                        <SmImgTwo src={smImgTwo}/>
                    </ImgWrapperTwo>
                </ImgWrapper>
            </ColumnTwo>
        </Row>
    </ShowCaseContainer>
  )
}

export default ShowCaseLst