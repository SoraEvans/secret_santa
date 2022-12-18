import React from 'react'
import GlStyles from '../components/style_global'
import Header from '../components/header'
import Main from '../components/main'
import Instr from '../components/instructions'
// дефолтное поэтому импорт без фигурных скобок

import Footer from '../components/footer'
import MkBoxBtn from '../components/mkbox_btn'
import Carousel from '../components/Carousel'

const Home = () => (
  <>
      <GlStyles/>
      <Header/>
      <Main/>
      <MkBoxBtn/>
      <Instr/>
      <Carousel/>
      <Footer/>
  </>
)

export default Home
