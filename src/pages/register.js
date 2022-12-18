import React, { useState } from 'react'
import { Link, Button } from '@mui/material'
import { AuthForm, Input } from './auth-styles'

// const onSubmit = (form) => {
//     {"*TODO*"}
// }

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
      <p>
        Уже зарегистрированы?
        <Link href="/login" underline="always">
          Войти на сайт
        </Link>
      </p>
      <Input
        placeholder="Имя"
        value={form.name}
        data-name="name"
        onChange={handleChangeForm}
      />
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
        bg="#FD9797;"
        variant="outlined"
        // onClick={() => {
        //   onSubmit(form)
        // }}
      >
        Зарегистрироваться
      </Button>
    </AuthForm>
  )
}
export default RegisterPage
