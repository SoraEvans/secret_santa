import styled from 'styled-components'

export const Hero = styled.section`
  background: #c4c5f6;
  position: relative;
  overflow: hidden;
  padding: 165px 0 60px 0;
  min-height: 90vh;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  margin: 0 0 20px 0;
`

export const Timer = styled.div`
  min-height: 300px;
  text-align: center;
  margin: 0 0 20px 0;
`

export const LeftTextBlock = styled.div`
  max-width: 38%;
  text-align: left;
`

export const RightTextBlock = styled.div`
  text-align: right;
  width: 311px;
  height: 135px;
`

export const Paragraph = styled.h1`
  font-weight: 700;
  font-size: 72px;
  line-height: 1;
`

export const Text = styled.span`
  font-weight: 500;
  font-size: 32px;
  line-height: 142.02%;
  white-space: nowrap;
`

export const SantaBoxBtn = styled.div`
  display: grid;
  place-items: center;
`

export const SantaBtn = styled.button`
  background-color: #ff5539;
  border: none;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fc482c;
    outline: 5px solid #fc482c;
    outline-offset: 5px;
  }
`
