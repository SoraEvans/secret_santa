import React, { useState } from 'react'
import { Link, Button } from '@mui/material'
import { AuthForm, Input } from './auth-styles'

// const onSubmit = (form) => {
//
// }

export const LoginPage = () => {
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
      <p>
        Ещё не зарегистрированы?
        <Link href="/register" underline="always">
          Зарегистрироваться
        </Link>
      </p>
      <Input
        placeholder="Почта"
        type="email"
        value={form.email}
        data-name="email"
        onChange={handleChangeForm}
      />
      <Input
        placeholder="Пароль"
        type="password"
        value={form.password}
        data-name="password"
        onChange={handleChangeForm}
      />
      <Button
        variant="outlined"
        // onClick={() => {
        //   onSubmit(form)
        // }}
      >
        Войти
      </Button>
    </AuthForm>
  )
}

export default LoginPage
