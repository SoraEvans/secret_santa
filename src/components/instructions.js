import React from 'react';
import styled from "styled-components";
import Cont from "./style_cont";


const InstrSec = styled.section`
background: #FFFFFF;
`;

const InstrHeader = styled.p`
display: inline-block;
font-weight: 700;
font-size: 30px;
line-height: 50px;
background-color: #C0C0C0;
margin-top: 96px;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const InstrList = styled.div`
display: flex;
justify-content: space-between;
width: 60%;
margin-top: 160px;
`;

const InstrNums = styled.ul`
display: inline-block;
font-size: 80px;
list-style-type: none;
`;

const InstrNum = styled.li`
background: #C0C0C0;
margin: 10px;
padding-left: 20px;
padding-right: 20px;
margin-bottom: 163px;
`;

const InstrText = styled.ul`
width: 100%;
text-align: center;
font-weight: 400;
font-size: 20px;
line-height: 35px;
list-style-type: none;
`;

const InstrTextLine = styled.li`
margin-left: 47px;
text-align: left;
margin-top: 10px;
background-color: #C0C0C0;
margin-bottom: 163px;
padding-left: 15px;
`;

const InstrIllustr = styled.div`
min-height: 586px;
`;

const InstrIllustrImg = styled.img`
`;

const Instructions = () => (
    <InstrSec>
        <Cont>
            <InstrHeader>Lorem ipsum dolor sit amet consectetur</InstrHeader>
            <Wrapper>
                <InstrList>
                    <InstrNums>
                        <InstrNum>1</InstrNum>
                        <InstrNum>2</InstrNum>
                        <InstrNum>3</InstrNum>
                    </InstrNums>

                    <InstrText>
                        <InstrTextLine>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, atque, culpa laborum
                            fugiat consequuntur voluptatum voluptas ipsa aperiam eveniet</InstrTextLine>
                        <InstrTextLine>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, atque, culpa laborum
                            fugiat consequuntur voluptatum voluptas ipsa aperiam eveniet</InstrTextLine>
                        <InstrTextLine>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, atque, culpa laborum
                            fugiat consequuntur voluptatum voluptas ipsa aperiam eveniet</InstrTextLine>
                    </InstrText>
                </InstrList>
                <InstrIllustr><InstrIllustrImg src="img/instrblockpic.png" alt='' /></InstrIllustr>
            </Wrapper>
        </Cont>
    </InstrSec>
);

export default Instructions;


