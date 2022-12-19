import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SantaBoxBtn = styled.div`
  display: grid;
  place-items: center;
`

const SantaBtn = styled.button`
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

const HeroSectionBtn = () => (
  <SantaBoxBtn>
    <SantaBtn>
      <Link to="/register">Стать Сантой</Link>
    </SantaBtn>
  </SantaBoxBtn>
)

export default HeroSectionBtn
