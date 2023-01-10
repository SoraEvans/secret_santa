import React from 'react'
import { BoxTitleInner, BoxTitleText, MyBoxMain } from './style'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import MyBoxTabs from '../../components/MyBoxTabs/MyBoxTabs'
import DB from '../../constants/db'

<<<<<<< HEAD



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
=======
const MyBox = () => <>
  <Header />
  <MyBoxMain>
    <BoxTitleInner>
      <img src={DB.boxes[0].cover} alt="" />
      <BoxTitleText>
        <h4>{DB.boxes[0].title}</h4>
        <span>{`${DB.users.length} участников`}</span>
      </BoxTitleText>
    </BoxTitleInner>
    <MyBoxTabs />
  </MyBoxMain>
  <Footer />
</>
>>>>>>> a35b45f4c33c2a954e7e256b634259d1bd35cf41

export default MyBox
