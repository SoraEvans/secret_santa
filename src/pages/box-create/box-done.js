import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ContainerBoxCreated, SubTitle, TitleBoxCreated } from './style'

function BoxDone() {
  return (
    <ContainerBoxCreated>
      <div>
        <TitleBoxCreated>Коробка создана!</TitleBoxCreated>
        <SubTitle style={{ marginBottom: '125px' }}>Какой-то текст</SubTitle>
        <Link to="/box" style={{ textDecoration: 'none' }}>
          <Button type="button">Заглянуть в коробку</Button>
        </Link>
      </div>
      <img src="img/Group.png" alt="alt" />
    </ContainerBoxCreated>
  )
}

export default BoxDone
