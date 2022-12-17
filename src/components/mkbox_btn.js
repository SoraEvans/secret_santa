import React from 'react';
import styled, { keyframes } from 'styled-components'
import Cont from "./style_cont";

const BtnSec = styled.section`
background: #FEEAEA;
background-image: url(/img/pngwing1.png);
background-size: 30%;
padding-top: 85px;
padding-bottom: 115px;
`;

const SantaBoxBtn = styled.button`
align-text: center;
color: #000000; 
  border-radius: 100%;
  border: none;
//   background: url(/img/btnround.png) no-repeat;
  background-size: 100%;
  margin: 0 auto;
  display: block;
  cursor: pointer;
`;

const Spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const SantaBoxBtnImg = styled.img`
      animation-name: ${Spin};
 animation-duration: 8s;
 animation-iteration-count: infinite;
`;

const MkBoxBtn = () => (
    <BtnSec>
        <Cont>
            <SantaBoxBtn><SantaBoxBtnImg src="img/btnround.png" alt='' />
            </SantaBoxBtn>
        </Cont>
    </BtnSec>
);

export default MkBoxBtn;
