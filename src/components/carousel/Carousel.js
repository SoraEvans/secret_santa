import React, { useState } from 'react'
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
import Leaves from '../../assets/images/leaves2.svg'
import ArrowLeft from '../../assets/images/arrow_left.svg'
import ArrowRight from '../../assets/images/arrow_right.svg'

const slides = [
  {
    title: 'Эстония',
    text: 'В Новый год эстонцы садятся за стол семь раз! Согласно примете, это обеспечит благосостояние (и сытость) в наступившем году. Некоторые едят даже не семь раз за день, а девять или двенадцать. Тут тоже есть объяснение: 7, 9 и 12 считаются в Эстонии счастливыми числами.'
  },
  {
    title: 'Дания',
    text: 'У датчан есть интересная новогодняя традиция: с боем часов они встают на самую высокую точку в доме — стул, диван, стол или стремянка — в общем, что найдут. А с последним ударом буквально «впрыгивают» в новый год. Еще они собирают старую фарфоровую посуду, чтобы в новогодний праздник разбить ее на крыльце родственников или друзей — на счастье!'
  },
  {
    title: 'Швеция',
    text: 'В Швеции, в отличие от большинства европейских стран, подарки детям приносит не высокий бородатый старик, а гном Юль Томтен. А помогают ему разные зверюшки, тролли, феи и даже Снежная Королева. Шведы очень любят разные гадания. В новогоднюю ночь они разбивают тарелки о двери соседей. Чем мельче осколки, тем больше счастья придет в новом году.'
  },
  {
    title: 'Тайланд',
    text: 'В Тайланде отмечают собственный праздник смены года — Сонгкран. Сонгкран празднуется в апреле несколько дней подряд. В это время тайцы выходят на улицы, чтобы пожелать друг другу счастья и... облить водой с головы до ног. Считается, что чем быстрее и  сильнее  ты  промокнешь,  тем больше  счастья  придет в новом году.'
  },
  {
    title: 'Италия',
    text: 'В Италии считают, что, вступая в новый год, нужно непременно избавиться от всего старого и ненужного. В канун Нового года темпераментные итальянцы выбрасывают старые вещи прямо из окон своих домов. В былые времена на улицы летела даже сломанная мебель. Сейчас же можно попасть под «обстрел» старыми бумагами и мелким мусором.'
  }
]

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const isLogged = localStorage.getItem('isLoggedIn');

  const updateIndex = newIndex => {
    let index = newIndex

    if (index < 0) {
      index = slides.length - 1
    } else if (newIndex >= slides.length) {
      index = 0
    }
    setActiveIndex(index)
  }

  return (
    <CarouselSection>
      <Link to={isLogged ? '/create-box' : '/register'} style={{ textDecoration: 'none' }}>
        <CarouselButton>Создать коробку</CarouselButton>
      </Link>
      <CarouselHeader>
        <div style={{ marginRight: 32 }}>Новогодние традиции в разных странах</div>
        <img src={Leaves} alt='' />
      </CarouselHeader>
      <CarouselWrapper>
        <CarouselArrows
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
        >
          <img src={ArrowLeft} alt='' />
        </CarouselArrows>
        <CarouselOuter>
          <CarouselInner
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map(({ title, text }, n) => (
              <CarouselItem width="80" size={n > 0 ? 24 : 28}>
                <div>{title}</div>
                <div>{text}</div>
              </CarouselItem>
            ))}
          </CarouselInner>
        </CarouselOuter>
        <CarouselArrows
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
        >
          <img src={ArrowRight} alt='' />
        </CarouselArrows>
      </CarouselWrapper>
    </CarouselSection>
  )
}

export default Carousel
