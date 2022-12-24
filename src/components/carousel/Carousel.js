import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CarouselArrows,
  CarouselButton,
  CarouselHeader,
  CarouselInner,
  CarouselItem,
  CarouselOuter,
  CarouselSection,
  CarouselWrapper
} from './style'

const slides = ['слайд 1', 'слайд 2', 'слайд 3', 'слайд 4', 'слайд 5']

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateIndex = newIndex => {
    let index = newIndex

    if (index < 0) {
      index = slides.length
    } else if (newIndex >= slides.length) {
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
    <CarouselSection>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <CarouselButton>Создать коробку</CarouselButton>
      </Link>
      <CarouselHeader>Новогодние традиции в разных странах</CarouselHeader>
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
            {slides.map(item => <CarouselItem width="100">{item}</CarouselItem>)}
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
    </CarouselSection>
  )
}

export default Carousel
