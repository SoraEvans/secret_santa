import React from 'react';
import GlStyles from '../components/style_global.js';
import Header from '../components/header.js';
import Main from '../components/main.js';
import Instr from '../components/instructions.js';
// дефолтное поэтому импорт без фигурных скобок
import MkBoxBtn from '../components/mkbox_btn.js';
import Footer from '../components/footer.js';

const Home = () => (
    <>
        <GlStyles />
        <Header />
        <Main />
        <Instr />
        <MkBoxBtn />
        <Footer />
    </>
)

export default Home;