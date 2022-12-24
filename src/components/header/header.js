import React from 'react'
import Container from '../style_cont'
import { AuthorisedWrapper, BoxesAndProfileLink, HeaderEl, Logo, NotificationsLink, SignUpLink, Wrapper } from './style'

function getToken() {

}

function Header() {
  const token = getToken();

  if (!token) {
    return (
      <HeaderEl>
        <Container>
          <Wrapper>
            <Logo>
              <img alt="logo" src="img/logo.svg" />
            </Logo>
            <SignUpLink to="/register">
              Вход и регистрация
            </SignUpLink>
          </Wrapper>
        </Container>
      </HeaderEl>
    )
  }

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Logo>
            <img alt="logo" src="img/logo.svg" />
          </Logo>
          <AuthorisedWrapper>
            <BoxesAndProfileLink to="/boxes">
              Коробки
            </BoxesAndProfileLink>
            <NotificationsLink to="#">
              Уведомления
            </NotificationsLink>
            <BoxesAndProfileLink to="/profile">
              Профиль
            </BoxesAndProfileLink>
          </AuthorisedWrapper>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}


export default Header
