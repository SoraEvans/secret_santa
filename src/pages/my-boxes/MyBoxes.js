import React, { useState } from 'react'
import { TabBox, TabItem, BoxWrapper, BoxItem } from './style'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import PrivateBox from '../../components/PrivateBox/PrivateBox'
import Cont from '../../components/style_cont'
import PublicBox from '../../components/PublicBox/PublicBox'

const MyBoxes = () => {
  const [tabIdx, setTabIdx] = useState(0)
  const handlerChangeTab = (event, newTabIdx) => {
    setTabIdx(newTabIdx)
  }

  return (
    <>
      <Header />

      <Cont>
        <BoxWrapper>
          <TabBox value={tabIdx} onChange={handlerChangeTab}>
            <TabItem label="Приватные коробки" />
            <TabItem label="Публичные коробки" />
          </TabBox>
          <BoxItem>{tabIdx === 0 && <PrivateBox />}</BoxItem>
          <BoxItem>{tabIdx === 1 && <PublicBox />}</BoxItem>
        </BoxWrapper>
      </Cont>

      <Footer />
    </>
  )
}

export default MyBoxes
