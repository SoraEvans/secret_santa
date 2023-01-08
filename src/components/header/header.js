import React from 'react'
import Container from '../style_cont'
import logo from '../../logo.svg'
import { AuthorisedWrapper, BoxesAndProfileLink, HeaderEl, Logo, NotificationsLink, SignUpLink, Wrapper } from './style'


function Header() {
  const isLogged = localStorage.getItem('isLoggedIn');

  if (isLogged === "true") {
    return (
      <HeaderEl>
        <Container>
          <Wrapper>
            <Logo>
              <img alt="logo" src={logo} />
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

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Logo>
            <img alt="logo" src={logo} />
          </Logo>
          <SignUpLink to="/register">
            Вход и регистрация
          </SignUpLink>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header
