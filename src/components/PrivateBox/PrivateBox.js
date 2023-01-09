import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PrivateWrapper, BtnAdd, BoxInner } from './style'

const PrivateBox = () => {
  const navigate = useNavigate()


  return (
    <PrivateWrapper>
      <BoxInner onClick={() => navigate('/box')} />
      <BtnAdd onClick={() => navigate('/create-box')}>+</BtnAdd>
    </PrivateWrapper>
  )
}

export default PrivateBox
