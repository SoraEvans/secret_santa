import React from 'react'
import styled, { keyframes } from 'styled-components'

const snowfall = keyframes`
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(650px);
  }

`

const Snow = styled.div`
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: -650px;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(4px 4px at 100px 50px, #fff, transparent),
      radial-gradient(6px 6px at 200px 150px, #fff, transparent),
      radial-gradient(3px 3px at 300px 250px, #fff, transparent),
      radial-gradient(4px 4px at 400px 350px, #fff, transparent),
      radial-gradient(6px 6px at 500px 100px, #fff, transparent),
      radial-gradient(3px 3px at 50px 200px, #fff, transparent),
      radial-gradient(4px 4px at 150px 300px, #fff, transparent),
      radial-gradient(6px 6px at 250px 400px, #fff, transparent),
      radial-gradient(5px 5px at 150px 400px, #fff, transparent),
      radial-gradient(6px 6px at 200px 600px, #fff, transparent),
      radial-gradient(5px 5px at 150px 400px, #fff, transparent),
      radial-gradient(3px 3px at 350px 500px, #fff, transparent);
    background-size: 650px 650px;
    animation: 3s ${snowfall} linear;
    animation-iteration-count: infinite;
  }

  &::after {
    margin-left: -250px;
    opacity: 0.8;
    filter: blur(2px);
    //animation-direction: reverse;
    animation-duration: 6s;
  }

  &::before {
    margin-left: -350px;
    opacity: 0.6;
    filter: blur(1px);
    animation-duration: 9s;
  }
`

const SnowFall = () => (
  <div>
    <Snow />
  </div>
)

export default SnowFall
