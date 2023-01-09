import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { AuthForm, Input, Div, Label, LabelLink, Title } from './auth-styles'

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const onSubmit = async form => {
    await fetch('https://backsecsanta.alwaysdata.net/api/user/login', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password
      })
    })
      // .then(response => response.text())
      // .then(response => {
      //   console.log(response)
      // })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          localStorage.setItem('isLoggedIn', true)
          localStorage.setItem('token', response.authorisation.token)
          localStorage.setItem('userId', response.user.id)
          navigate('/')
        }
      })
  }

  const handleChangeForm = e => {
    const field = e.target.getAttribute('data-name')
    setForm({
      ...form,
      [field]: e.target.value
    })
  }
  // if (isRedirect) {
  //   return <redirect to="/create-box" />
  // }

  return (
    <AuthForm>
      <h1>Войти на сайт</h1>
      <Title>
        Ещё не зарегистрированы?&nbsp;
        <Link to="/register" underline="always">
          Зарегистрироваться
        </Link>
      </Title>
      <Div>
        <Input
          required
          id="email"
          type="email"
          value={form.email}
          data-name="email"
          onChange={handleChangeForm}
        />
        <Label for="email">Почта</Label>
      </Div>
      <Div>
        <Input
          required
          id="password"
          type="password"
          value={form.password}
          data-name="password"
          onChange={handleChangeForm}
        />
        <Label for="password">Пароль</Label>
        <LabelLink for="password">
          <Link to="/password-reset">Забыли пароль?</Link>
        </LabelLink>
      </Div>
      <Button
        variant="outlined"
        onClick={() => {
          onSubmit(form)
        }}
      >
        Войти
      </Button>
      <p>
        Входя на сайт, вы даете согласие на&nbsp;
        <Link to="/www">обработку персональных данных.</Link>
      </p>
    </AuthForm>
  )
}

export default LoginPage
