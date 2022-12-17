import React from 'react';
import styled from "styled-components";
import Cont from "./style_cont";

const MainSec = styled.main`
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

const Timer = styled.div`
min-height: 297px;
text-align: center;
padding-top: 100px;
`;

const LeftTextBlock = styled.div`
width: 38%;
padding-bottom: 80px;
text-align: left;
`;

const RightTextBlock = styled.div`
width: 38%;
padding-bottom: 80px;
text-align: right;
`;

const Paragraph = styled.p`
display: inline;
font-weight: 700;
font-size: 30px;
line-height: 50px;
background-color: #C0C0C0;
`;

const Text = styled.span`
font-weight: 400;
font-size: 20px;
line-height: 35px;
background-color: #C0C0C0;
`;

const Main = () => (
    <MainSec>
        <Cont>
            <Timer>Здесь будет таймер</Timer>
            <Wrapper>
                <LeftTextBlock>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing</Paragraph>

                </LeftTextBlock>
                <RightTextBlock>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, atque, culpa laborum
                        fugiat consequuntur voluptatum voluptas ipsa aperiam eveniet</Text>
                </RightTextBlock>
            </Wrapper>
        </Cont>
    </MainSec>
)

export default Main;


