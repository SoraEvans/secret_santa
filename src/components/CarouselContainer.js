import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

export const CarouselItem = styled.div`
  width: ${props => props.width}%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: rgb(255, 37, 37);
  background: radial-gradient(
    circle,
    rgba(255, 37, 37, 1) 0%,
    rgba(233, 233, 233, 1) 49%,
    rgba(255, 0, 0, 0.46495693003764005) 100%
  );
  color: #fff;
`

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: auto;
`

const CarouselInner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`

const CarouselOuter = styled.div`
  overflow: hidden;
  width: 60%;
`

const CarouselArrows = styled.button`
  margin: 5px;
  border: none;
  background: none;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`

const CarouselContainer = prop => {
  const { children } = prop

  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateIndex = newIndex => {
    let index = newIndex

    if (index < 0) {
      index = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      index = 0
    }

    setActiveIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 3000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  return (
    <CarouselWrapper>
      <CarouselArrows
        onClick={() => {
          updateIndex(activeIndex - 1)
        }}
      >
        ◀
      </CarouselArrows>
      <CarouselOuter
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <CarouselInner
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, child =>
            React.cloneElement(child, { width: '100' })
          )}
        </CarouselInner>
      </CarouselOuter>
      <CarouselArrows
        onClick={() => {
          updateIndex(activeIndex + 1)
        }}
      >
        ▶
      </CarouselArrows>
    </CarouselWrapper>
  )
}

export default CarouselContainer
