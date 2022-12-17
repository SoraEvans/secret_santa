import React, { useState } from 'react'
import { Button } from '@mui/material'
import { AuthForm, Input } from './auth-styles'

// const onSubmit = (form) => {

// }

export const PasswordResetPage = () => {
  const [form, setForm] = useState({ email: '' })

  const handleChangeForm = event => {
    const field = event.target.getAttribute('data-name')

    setForm({
      ...form,
      [field]: event.target.value
    })
  }

  return (
    <AuthForm>
      <h1>Восстановление доступа</h1>
      <Input
        placeholder="Почта"
        type="email"
        value={form.email}
        data-name="email"
        onChange={handleChangeForm}
      />
      <Button
        variant="outlined"
        // onClick={() => {
        //   onSubmit(form)
        // }}
      >
        Восстановить пароль
      </Button>
    </AuthForm>
  )
}

export default PasswordResetPage
