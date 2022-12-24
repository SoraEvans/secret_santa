import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { AuthForm, Input, Div, Label, Title } from './auth-styles'

const onSubmit = async form => {
  await fetch('http://testingsanta/api/user', {
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      password: form.password
    })
  })
    .then(response => response.text())
    .then(response => {
      console.log(response)
    })
}

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleChangeForm = event => {
    const field = event.target.getAttribute('data-name')

    setForm({
      ...form,
      [field]: event.target.value
    })
  }

  return (
    <AuthForm>
      <h1>Регистрация</h1>
      <Title>
        Уже зарегистрированы?&nbsp;
        <Link to="/login" underline="always">
          Войти на сайт
        </Link>
      </Title>
      <Div>
        <Input
          required
          id="name"
          value={form.name}
          data-name="name"
          onChange={handleChangeForm}
        />
        <Label for="name">Имя</Label>
      </Div>
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
      </Div>
      <Button
        variant="outlined"
        onClick={() => {
          onSubmit(form)
        }}
      >
        Зарегистрироваться
      </Button>
      <p>
        Регистрируясь, вы даете согласие на&nbsp;
        <Link to="/www">обработку персональных данных.</Link>
      </p>
    </AuthForm>
  )
}
export default RegisterPage
