import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderEl = styled.header`
  background: #c4c5f6;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  display: block;
  height: 85px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`

export const AuthorisedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  height: 65px;
`

export const SignUpLink = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: #CDCCCC;
  width: 205px;
  padding: 15px 0;
  text-align: center;
`

export const BoxesAndProfileLink = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: #CDCCCC;
  width: 131px;
  padding: 15px 0;
  text-align: center;
  margin-left: 15px;
  display: block;
`

export const NotificationsLink = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: #CDCCCC;
  width: 181px;
  padding: 15px 0;
  text-align: center;
  margin-left: 15px;
  display: block;
`
