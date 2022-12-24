import React from 'react'
import { CopyrightText, FooterEl, FooterText, Wrapper } from './style'
import Container from '../style_cont'

const Footer = () => (
  <FooterEl>
    <Container>
      <Wrapper>
        <FooterText>Помочь проекту</FooterText>
        <FooterText>Обратная связь</FooterText>
        <CopyrightText>©Copyright 2022</CopyrightText>
      </Wrapper>
    </Container>
  </FooterEl>
)

export default Footer;