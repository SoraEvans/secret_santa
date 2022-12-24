import React from 'react'
import Container from '../style_cont'
import {
  InstrHeader,
  InstrIllustr,
  InstrList,
  InstrNum,
  InstrNums,
  InstrSec,
  InstrText,
  InstrTextLine,
  Wrapper
} from './style'

const arr = [1, 2, 3]

const Instructions = () => (
  <InstrSec>
    <Container>
      <InstrHeader>Инструкция по применению</InstrHeader>
      <Wrapper>
        <InstrList>
          <InstrNums>
            {arr.map(item => <InstrNum>{item}</InstrNum>)}
          </InstrNums>
          <InstrText>
            {arr.map(() => (
              <InstrTextLine>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, atque, culpa laborum
                fugiat consequuntur voluptatum voluptas ipsa aperiam eveniet
              </InstrTextLine>
            ))}
          </InstrText>
        </InstrList>
        <InstrIllustr>
          <img src="img/instrblockpic.png" alt='' />
        </InstrIllustr>
      </Wrapper>
    </Container>
  </InstrSec>
);

export default Instructions;
