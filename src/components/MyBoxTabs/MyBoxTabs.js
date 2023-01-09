import React, { useState } from 'react'
import { TabsWrapper, TabsInner, TabItem, TabBody } from './style'
import BoxUsers from '../BoxUsers/BoxUsers'

const MyBoxTabs = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  const handlerChangeTab = (event, newIdx) => {
    setActiveIdx(newIdx)
  }
  return (
    <>
      <TabsWrapper>
        <TabsInner
          orientation="vertical"
          value={activeIdx}
          onChange={handlerChangeTab}
        >
          <TabItem label="Участники" />
          <TabItem label="Моя карточка" />
          <TabItem label="Мой подопечный" />
        </TabsInner>
      </TabsWrapper>
      <TabBody>{activeIdx === 0 && <BoxUsers />}</TabBody>
    </>
  )
}

export default MyBoxTabs
