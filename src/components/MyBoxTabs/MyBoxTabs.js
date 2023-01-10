import React, { useState } from 'react'
import { TabsWrapper, TabsInner, TabItem, TabBody } from './style'
import BoxUsers from '../BoxUsers/BoxUsers'
import MyCard from '../MyCard/MyCard'
import WardCard from '../WardCard/WardCard'


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
          <TabItem label={<div>Участники</div>} />
          <TabItem label={<div>Моя карточка</div>} />
          <TabItem label={<div>Мой подопечный</div>} />
        </TabsInner>
      </TabsWrapper>
<<<<<<< HEAD
      <TabBody>
        {activeIdx === 0 &&
          <BoxUsers />}
      </TabBody>
=======
      <TabBody>{activeIdx === 0 && <BoxUsers />}</TabBody>
      <TabBody>{activeIdx === 1 && <MyCard />}</TabBody>
      <TabBody>{activeIdx === 2 && <WardCard />}</TabBody>
>>>>>>> a35b45f4c33c2a954e7e256b634259d1bd35cf41
    </>
  )
}

export default MyBoxTabs
