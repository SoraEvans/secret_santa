import React from 'react'
import GlStyles from '../components/style_global'

import HeroSection from '../components/HeroSection'
import Instr from '../components/instructions'
// дефолтное поэтому импорт без фигурных скобок
import Footer from '../components/footer'
import Carousel from '../components/Carousel'
import AccordionFaq from '../components/AccordionFaq'

const Home = () => (
  <>
    <GlStyles />
    <HeroSection />
    <Instr />
    <AccordionFaq />
    <Carousel />
    <Footer />
  </>
)

export default Home
