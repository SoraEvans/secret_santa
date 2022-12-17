import React from "react";
import styled from "styled-components";
import Cont from "./style_cont";

const HeaderEl = styled.header`
background: #FEEAEA;
background-image: url(/img/pngwing1.png);
background-size: 30%;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 0;
`;

const Logo = styled.a.attrs({
    href: '/',
})`
color: black;
text-decoration: none;
background-color: #C0C0C0;
padding: 5px;
`;

const Menu = styled.div`
color: black;
background-color: #C0C0C0;
padding: 5px;
`;

const Header = () => (

    <HeaderEl>
        <Cont>
            <Wrapper>
                <Logo><span style={{ color: '#FF5539' }}>Logo</span></Logo>
                <Menu>Меню</Menu>
            </Wrapper>
        </Cont>
    </HeaderEl >
)

export default Header;
