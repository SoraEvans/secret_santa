import styled from '@emotion/styled'

export const CarouselSection = styled.section`
  width: 100%;
  max-width: 1270px;
  margin: 65px auto 88px auto;
  padding: 0 1rem;
`

export const CarouselButton = styled.button`
  display: block;
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 20px;
  margin: 0 auto 82px auto;
  height: 81px;
  width: 291px;
  background-color: #fd9797;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ff5539;
  }
`

export const CarouselHeader = styled.h2`
  display: inline-block;
  padding: 0 15px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 63px;
  background-color: #d9d9d9;
`

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 89px auto 0 auto;
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
  width: 60%;
  max-width: 1000px;
`

export const CarouselInner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`

export const CarouselItem = styled.div`
  width: ${props => props.width}%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 396px;
  background: rgb(255, 37, 37);
  background: radial-gradient(
    circle,
    rgba(255, 37, 37, 1) 0%,
    rgba(233, 233, 233, 1) 49%,
    rgba(255, 0, 0, 0.46495693003764005) 100%
  );
  color: #fff;
`
