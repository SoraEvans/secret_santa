import React from 'react'
import GlStyles from '../components/style_global'
import Header from '../components/header'
import Main from '../components/main'
import Instr from '../components/instructions'
// дефолтное поэтому импорт без фигурных скобок

import Footer from '../components/footer'
import MkBoxBtn from '../components/mkbox_btn'

const Home = () => (
  <>
    <GlStyles />
    <Header />
    <Main />
    <MkBoxBtn />
    <Instr />
    <Footer />
  </>
)

export default Home
