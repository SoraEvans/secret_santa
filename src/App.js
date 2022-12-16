import React from 'react'
import { Routes, Link, Route } from 'react-router-dom'
import AccordionFaq from './components/AccordionFaq'
import './App.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/register">Регистрация</Link>
          </li>
          <li>
            <Link to="/login">Авторизация</Link>
          </li>
          <li>
            <Link to="/password-reset">Восстановление пароля</Link>
          </li>
          <li>
            <Link to="/create-box">Создание коробки</Link>
          </li>
          <li>
            <Link to="/box-created">Коробка создана</Link>
          </li>
          <li>
            <Link to="/box">Коробка</Link>
          </li>
          <li>
            <Link to="/whose-santa">Кто чей Санта?</Link>
          </li>
          <li>
            <Link to="/box/settings">Настройки коробки</Link>
          </li>
          <li>
            <Link to="/profile">Профиль</Link>
          </li>
          <li>
            <Link to="/boxes">Коробки</Link>
          </li>
        </ul>
      </nav>
      <AccordionFaq />

      <Routes>
        <Route path="/" element={<h1>Главная</h1>} />
        <Route path="/register" element={<h1>Регистрация</h1>} />
        <Route path="/login" element={<h1>Авторизация</h1>} />
        <Route
          path="/password-reset"
          element={<h1>Восстановление пароля</h1>}
        />
        <Route path="/create-box" element={<h1>Создание коробки</h1>} />
        <Route path="/box-created" element={<h1>Коробка создана</h1>} />

        <Route path="/box">
          <Route index element={<h1>Коробка</h1>} />
          <Route path="settings" element={<h1>Настройки коробки</h1>} />
          <Route path="participants" element={<h1>Участники</h1>} />
          <Route path="my-card" element={<h1>Моя карточка</h1>} />
          <Route path="my-giftee" element={<h1>Мой подопечный</h1>} />
        </Route>

        <Route path="/whose-santa" element={<h1>Кто чей Санта?</h1>} />
        <Route path="/profile" element={<h1>Профиль</h1>} />

        <Route path="/boxes" element={<h1>Коробки</h1>}>
          <Route index element={<h1>Коробки</h1>} />
          <Route path="mine" element={<h1>Мои коробки</h1>} />
          <Route path="public" element={<h1>Публичные коробки</h1>} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App
