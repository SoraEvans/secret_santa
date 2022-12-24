import React from 'react';
import styled from "styled-components";
import Cont from "./style_cont";


const FooterEl = styled.footer`
background: #D2D2D2;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
padding: 2rem 0;
`;

const FooterText = styled.p`
text-align: center;
font-weight: 400;
font-size: 24px;
line-height: 29px;
cursor: pointer;
`;

const CopyrightText = styled.p`
text-align: center;
color: #818181;
font-weight: 400;
font-size: 24px;
line-height: 29px;
`

const Footer = () => (
    <FooterEl>
        <Cont>
            <Wrapper>
                <FooterText>Помочь проекту</FooterText>
                <FooterText>Обратная связь</FooterText>
                <CopyrightText>©Copyright 2022</CopyrightText>
            </Wrapper>
        </Cont>
    </FooterEl>
)

export default Footer;