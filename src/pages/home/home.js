import React from 'react'
import HeroSection from '../../components/main-section/HeroSection'
import Instr from '../../components/instruction/instructions'
import Footer from '../../components/footer/footer'
import Carousel from '../../components/carousel/Carousel'
import AccordionFaq from '../../components/accordion/AccordionFaq'

const Home = () => (
  <>
    <HeroSection />
    <Instr />
    <AccordionFaq />
    <Carousel />
    <Footer />
  </>
)

export default Home
