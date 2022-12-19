import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Cont from './style_cont'

const HeaderEl = styled.header`
  background: #c4c5f6;
  position: relative;
  z-index: 2;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const Logo = styled.a.attrs({
  href: '/'
})`
  color: black;
  text-decoration: none;
  background-color: #c0c0c0;
  padding: 5px;
`

const SignUp = styled.div`
  color: black;
  background-color: #c0c0c0;
  padding: 5px;
`

const Header = () => (
  <HeaderEl>
    <Cont>
      <Wrapper>
        <Logo>
          <span style={{ color: '#FF5539' }}>Logo</span>
        </Logo>
        <SignUp>
          <Link to="/register">Вход и регистрация</Link>
        </SignUp>
      </Wrapper>
    </Cont>
  </HeaderEl>
)

export default Header
