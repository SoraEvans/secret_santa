import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { AuthForm, Input, Div, Label, LabelLink, Title } from './auth-styles'

// const onSubmit = async (form) => {
// await
// }

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChangeForm = e => {
    const field = e.target.getAttribute('data-name')
    setForm({
      ...form,
      [field]: e.target.value
    })
  }

  return (
    <AuthForm>
      <h1>Войти на сайт</h1>
      <Title>
        Ещё не зарегистрированы?
        <Link to="/register" underline="always">
          Зарегистрироваться
        </Link>
      </Title>
      <Div>
        <Input
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
        // onClick={() => {
        //   onSubmit(form)
        // }}
      >
        Войти
      </Button>
      <p>
        Входя на сайт, вы даете согласие на
        <Link to="/www">обработку персональных данных.</Link>
      </p>
    </AuthForm>
  )
}

export default LoginPage
