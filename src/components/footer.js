import React from 'react';
import styled from "styled-components";
import Cont from "./style_cont";


const FooterEl = styled.footer`
background: #D2D2D2;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 0;
`;

const FooterText = styled.p`
width: 25%;
text-align: center;
background: #C0C0C0;
`;


const Footer = () => (
    <FooterEl>
        <Cont>
            <Wrapper>
                <FooterText>Lorem ipsum dolor sit amet consectetur</FooterText>
                <FooterText>Lorem ipsum dolor sit amet consectetur</FooterText>
                <FooterText>Lorem ipsum dolor sit amet consectetur</FooterText>
            </Wrapper>
        </Cont>
    </FooterEl>
)

export default Footer;