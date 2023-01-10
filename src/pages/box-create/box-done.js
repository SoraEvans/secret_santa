import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  ContainerBoxCreated,
  SubTitle,
  TitleBoxCreated,
  Container, Img
} from './style'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function BoxDone() {
  return (
    <>
      <Header />
      <Container>
        <ContainerBoxCreated>
          <div>
            <TitleBoxCreated>Коробка создана!</TitleBoxCreated>
            <SubTitle style={{ marginBottom: '125px' }}>
              Теперь можно заглянуть внутрь и добавить новых участников, чтобы провести жеребьевку и распределить Сант.
            </SubTitle>
            <Link to="/box" style={{ textDecoration: 'none' }}>
              <Button type="button">Заглянуть в коробку</Button>
            </Link>
          </div>
          <Img src="img/Group.png" alt="alt" />
        </ContainerBoxCreated>
      </Container>
      <Footer />
    </>
  )
}

export default BoxDone
