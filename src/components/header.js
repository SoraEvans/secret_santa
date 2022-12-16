import React from "react";
import styled from "styled-components";
import Cont from "./style_cont";

const HeaderEl = styled.header`
background: #FEEAEA;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 0;
background: #FEEAEA;
`;

const Logo = styled.a.attrs({
    href: '/',
})`
color: black;
text-decoration: none;
`;

const Menu = styled.div`
color: orange;
`;

const Header = () => (

    <HeaderEl>
        <Cont>
            <Wrapper>
                <Logo><span style={{ color: 'orange' }}>Logo</span></Logo>
                <Menu>Меню</Menu>
            </Wrapper>
        </Cont>
    </HeaderEl >
)

export default Header;
