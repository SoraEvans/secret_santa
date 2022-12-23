import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Cont from './style_cont'

const HeaderEl = styled.header`
  background: #c4c5f6;
  position: fixed;
  top:0;
  width: 100%;
  z-index: 2;
  display: block;
  height: 85px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`
const AuthorisedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.a.attrs({
  href: '/'
})`
  height: 65px;
`

const SignUpLink = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: #CDCCCC;
  width: 205px;
  padding: 15px 0;
  text-align: center;
`
const BoxesAndProfileLink = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: #CDCCCC;
  width: 131px;
  padding: 15px 0;
  text-align: center;
  margin-left: 15px;
  display: block;
`
const NotificationsLink = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: #CDCCCC;
  width: 181px;
  padding: 15px 0;
  text-align: center;
  margin-left: 15px;
  display: block;
`

function getToken() {

}


function Header() {

  const token = getToken();

  if (!token) {
    return (
      <HeaderEl>
        <Cont>
          <Wrapper>
            <Logo>
              <img alt="logo" src="img/logo.svg" />
            </Logo>
            <SignUpLink to="/register">Вход и регистрация
            </SignUpLink>
          </Wrapper>
        </Cont>
      </HeaderEl>
    )
  }

  return (

    <HeaderEl>
      <Cont>
        <Wrapper>
          <Logo>
            <img alt="logo" src="img/logo.svg" />
          </Logo>
          <AuthorisedWrapper>
            <BoxesAndProfileLink to="/boxes">Коробки
            </BoxesAndProfileLink>
            <NotificationsLink to="#">Уведомления
            </NotificationsLink>
            <BoxesAndProfileLink to="/profile">Профиль
            </BoxesAndProfileLink>
          </AuthorisedWrapper>
        </Wrapper>
      </Cont>
    </HeaderEl>
  )
}


export default Header
