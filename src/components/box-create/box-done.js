import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, SubTitle, Title } from './box-done-styles'

function BoxDone() {
  return (
    <Container>
      <div>
        <Title>Коробка создана!</Title>
        <SubTitle style={{ marginBottom: '125px' }}>Какой-то текст</SubTitle>
        <Link to="/box" style={{ textDecoration: 'none' }}>
          <Button type="button">Заглянуть в коробку</Button>
        </Link>
      </div>
      <img src="img/Group.png" alt="alt" />
    </Container>
  )
}

export default BoxDone
