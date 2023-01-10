import React from 'react'

import { BoxTitleInner, BoxTitleText, MyBoxMain } from './style'
import Container from '../../components/style_cont'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import MyBoxTabs from '../../components/MyBoxTabs/MyBoxTabs'
import DB from '../../constants/db'
import DrawButton from "../../components/draw-button/DrawButton";




const MyBox = () => (




     <>
      <Header />
      <MyBoxMain>
        <Container>
            <BoxTitleInner>
            <img src={DB.boxes[0].cover} alt="" />
            <BoxTitleText>
              <h4>{DB.boxes[0].title}</h4>
              <span>{`${DB.users.length} участников`}</span>
            </BoxTitleText>
          </BoxTitleInner>
          <MyBoxTabs />
           <DrawButton/>
        </Container>

      </MyBoxMain>

      <Footer />
    </>


)

export default MyBox
