import React from 'react'
import Container from '../style_cont'
import CountdownTimer from '../timer/CountdownTimer'
import HeroSectionBtn from './HeroSectionBtn'
import Header from '../header/header'
import Snow from '../animation/SnowFall'
import { Hero, LeftTextBlock, Paragraph, RightTextBlock, Text, Timer, Wrapper } from './style'

const HeroSection = () => (
  <Hero>
    <Snow />
    <Header />
    <Container>
      <Timer>
        <CountdownTimer />
      </Timer>
      <Wrapper>
        <LeftTextBlock>
          <Paragraph>Тайный Санта</Paragraph>
        </LeftTextBlock>
        <RightTextBlock>
          <Text>
            Создай новогоднее <br/>
            настроение себе <br/>
            и друзьям
          </Text>
        </RightTextBlock>
      </Wrapper>
      <HeroSectionBtn />
    </Container>
  </Hero>
)

export default HeroSection
