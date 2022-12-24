import { Switch, styled } from '@mui/material'
import React, { useState } from 'react'
import {
  Head,
  Title,
  Container,
  SubTitle,
  Input,
  Div,
  Label,
  P,
  CoverButton,
  DivInput,
  Cover,
  SmallInput,
  SmallLabel,
  CancellButton,
  CreateButton,
  ButtonsDiv,
  Select,
  CostDiv,
  CostInput
} from './box-styles'

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 79,
  height: 36,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 25
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)'
    }
  },
  '& .MuiSwitch-switchBase': {
    padding: 3,
    '&.Mui-checked': {
      transform: 'translateX(43px)',
      color: '#FD9797',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#FFBFBF'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    width: 30,
    height: 30,
    borderRadius: 15,
    transition: theme.transitions.create(['width'], {
      duration: 200
    })
  },
  '& .MuiSwitch-track': {
    borderRadius: 38 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box'
  }
}))

const BoxCreate = () => {
  const [state, setState] = useState({
    name: '',
    cover: 'img',
    anonymous: false,
    email: false,
    public: false,
    quantity: 0,
    date: '',
    limit: false,
    cost: '',
    currency: 'RUB'
  })
  console.log(state)
  const handleChangeForm = event => {
    const field = event.target.getAttribute('data-name')
    setState({
      ...state,
      [field]: event.target.value
    })
  }
  const handleChangeSwitch = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    })
  }
  return (
    <Container>
      <Head>
        <Title>Создание коробки</Title>
        <SubTitle>Настройте свою коробку за несколько простых шагов</SubTitle>
      </Head>
      <div>
        <DivInput>
          <Input
            required
            data-name="name"
            id="name"
            type="text"
            onChange={handleChangeForm}
          />
          <Label for="name">Название коробки</Label>
        </DivInput>
        <Cover>
          <P>Обложка коробки</P>
          <CoverButton
            data-name="cover"
            onClick={handleChangeForm}
            type="button"
          >
            +
          </CoverButton>
        </Cover>
        <Div>
          <div>
            <P>Анонимность участников</P>
            <p>какой-то текст</p>
          </div>
          <AntSwitch
            checked={state.anonymous}
            name="anonymous"
            onChange={handleChangeSwitch}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Div>
        <Div>
          <div>
            <P>Добавить в карточку почтовый адрес</P>
            <p>какой-то текст</p>
          </div>

          <AntSwitch
            checked={state.email}
            name="email"
            onChange={handleChangeSwitch}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Div>
        <Div style={{ marginBottom: '38px' }}>
          <div>
            <P>Сделать коробку публичной</P>
            <p>какой-то текст</p>
          </div>
          <AntSwitch
            checked={state.public}
            name="public"
            onChange={handleChangeSwitch}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Div>
        <div>
          <DivInput>
            <SmallInput
              required
              data-name="quantity"
              id="quantity"
              type="number"
              min="0"
              onChange={handleChangeForm}
            />
            <SmallLabel for="quantity">
              Введите максимальное количество участников
            </SmallLabel>
          </DivInput>
          <DivInput>
            <SmallInput
              required
              data-name="date"
              id="date"
              type="date"
              min="2022-12-01"
              onChange={handleChangeForm}
            />
            <SmallLabel for="date">
              Выберите дату проведения автоматической жеребьевки
            </SmallLabel>
          </DivInput>
        </div>
        <div>
          <Div style={{ marginBottom: '20px' }}>
            <div>
              <P>Ограничить стоимость подарков</P>
              <p>какой-то текст</p>
            </div>
            <AntSwitch
              checked={state.limit}
              name="limit"
              onChange={handleChangeSwitch}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Div>
          <CostDiv>
            <CostInput
              required
              data-name="cost"
              type="number"
              min="0"
              onChange={handleChangeForm}
            />
            <Select data-name="currency" onChange={handleChangeForm}>
              <option value="RUB">Рубли</option>
              <option value="EUR">Евро</option>
            </Select>
          </CostDiv>
        </div>
        <ButtonsDiv>
          <CancellButton type="button">Отмена</CancellButton>
          <CreateButton type="button">Создать коробку</CreateButton>
        </ButtonsDiv>
      </div>
    </Container>
  )
}

export default BoxCreate
