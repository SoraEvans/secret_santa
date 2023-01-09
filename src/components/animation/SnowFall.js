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
    background-image: radial-gradient(4px 4px at 100px 500px, #fff, transparent),
      radial-gradient(7px 7px at 280px 180px, #fff, transparent),
      radial-gradient(6px 6px at 300px 250px, #fff, transparent),
      radial-gradient(4px 4px at 330px 180px, #fff, transparent),
      radial-gradient(7px 7px at 500px 100px, #fff, transparent),
      radial-gradient(6px 6px at 50px 200px, #fff, transparent),
      radial-gradient(4px 4px at 170px 370px, #fff, transparent),
      radial-gradient(7px 12px at 310px 410px, #fff, transparent),
      radial-gradient(5px 5px at 150px 400px, #fff, transparent),
      radial-gradient(7px 7px at 200px 350px, #fff, transparent),
      radial-gradient(5px 5px at 230px 420px, #fff, transparent),
      radial-gradient(6px 6px at 550px 170px, #fff, transparent);
    background-size: 650px 650px;
    animation: 3s ${snowfall} linear;
    animation-iteration-count: infinite;
  }

  &::after {
    margin-left: -150px;
    opacity: 1;
    filter: blur(0.8px);
    animation-duration: 6s;
    animation-timing-function: linear;
  }

  &::before {
    margin-left: -450px;
    opacity: 1;
    animation-duration: 8s;
    animation-timing-function: linear;
  }
`

export default Snow
