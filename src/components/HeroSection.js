import React from 'react'
import styled from 'styled-components'
import Cont from './style_cont'
import CountdownTimer from './CountdownTimer'
import HeroSectionBtn from './HeroSectionBtn'
import Header from './header'
import SnowFall from './SnowFall'

const Hero = styled.section`
  background: #c4c5f6;
  position: relative;
  overflow: hidden;
  padding: 0 0 60px 0;
  min-height: 90vh;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  margin: 0 0 20px 0;
`

const Timer = styled.div`
  min-height: 300px;
  text-align: center;
  margin: 0 0 20px 0;
`

const LeftTextBlock = styled.div`
  max-width: 38%;
  text-align: left;
`

const RightTextBlock = styled.div`
  width: 38%;
  text-align: right;
`

const Paragraph = styled.h1`
  font-weight: 700;
  font-size: 72px;
  line-height: 1;
`

const Text = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  //background-color: #c0c0c0;
`

const HeroSection = () => (
  <Hero>
    <SnowFall />
    <Header />
    <Cont>
      <Timer>
        <CountdownTimer />
      </Timer>
      <Wrapper>
        <LeftTextBlock>
          <Paragraph>Тайный Санта</Paragraph>
        </LeftTextBlock>
        <RightTextBlock>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
            atque, culpa laborum fugiat consequuntur voluptatum voluptas ipsa
            aperiam eveniet
          </Text>
        </RightTextBlock>
      </Wrapper>
      <HeroSectionBtn />
    </Cont>
  </Hero>
)

export default HeroSection
