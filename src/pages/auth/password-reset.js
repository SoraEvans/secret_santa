import React, { useState } from 'react'
import { Button } from '@mui/material'
import { AuthForm, Input, Div, Label } from './auth-styles'

// const onSubmit = (form) => {

// }

const PasswordResetPage = () => {
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
