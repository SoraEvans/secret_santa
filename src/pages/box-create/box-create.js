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
  CostInput,
  AntSwitch
} from './box-styles'

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
