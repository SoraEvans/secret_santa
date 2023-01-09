import styled from '@emotion/styled'

export const CarouselSection = styled.section`
  margin: 65px auto 88px auto;
  padding: 0 1rem;
  max-width: 1200px;
`

export const CarouselButton = styled.button`
  font-family: Raleway;
  display: block;
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 24px;
  margin: 0 auto 136px auto;
  height: 81px;
  width: 291px;
  background-color: #FF5539;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #ff4f32;
  }
`

export const CarouselHeader = styled.h2`
  font-family: "Amatic SC bold";
  display: flex;
  align-items: center;
  padding: 0 15px;
  text-align: center;
  font-weight: 700;
  font-size: 56px;
  line-height: 63px;
  margin-bottom: 0;
`

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 42px auto 0 auto;
`

export const CarouselArrows = styled.button`
  margin: 5px;
  color: #d9d9d9;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #ff5539;
  }
`

export const CarouselOuter = styled.div`
  overflow: hidden;
  max-width: 1000px;
`

export const CarouselInner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`

export const CarouselItem = styled.div`
  width: ${props => props.width}%;
  font-family: Raleway;
  height: 100%;
  font-size: ${props => props.size}px;
  align-items: flex-start;
  font-weight: 200;
  padding: 70px 100px;
  line-height: 33.57px;
  display: inline-flex;
  white-space: pre-wrap;
  flex-direction: column;
  justify-content: center;
  background-color: #EFEFEF;
  color: #000000;

  & > div:first-child {
    font-family: "Amatic SC bold";
    font-size: 48px;
    margin-bottom: 26px;
  }
`
