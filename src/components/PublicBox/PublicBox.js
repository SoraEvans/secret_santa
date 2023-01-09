import React from 'react'
import AvailableBoxes from '../AvailableBoxes/AvailableBoxes'
import {
  PublicWrapper,
  PublicLeftItem,
  PublicLeftTitle,
  PublicRightBox,
  PublicRightTitle,
  BoxInner
} from './style'

const PublicBox = () => (
  <PublicWrapper>
    <div>
      <PublicLeftTitle>Мои публичные коробки</PublicLeftTitle>
      <PublicLeftItem>
        <BoxInner />
        <BoxInner />
      </PublicLeftItem>
    </div>
    <PublicRightBox>
      <PublicRightTitle>Доступные публичные коробки</PublicRightTitle>
      <div>
        <AvailableBoxes />
      </div>
    </PublicRightBox>
  </PublicWrapper>
)

export default PublicBox
