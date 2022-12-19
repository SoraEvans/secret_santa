import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const CarouselSection = styled.section`
  width: 100%;
  max-width: 1470px;
  margin: 65px auto 88px auto;
  padding: 0 1rem;
  
`

const CarouselButton = styled.button`
  display: block;
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 20px;
  margin: 0 auto 82px auto;
  height: 81px;
  width: 291px;
  background-color: #FD9797;
  border: none;
  cursor: pointer;
  &:hover{
    background-color:#FF5539;
  }
`

const CarouselHeader = styled.h2`
  display: inline-block;
  padding: 0 15px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 63px;
  background-color: #D9D9D9;
`

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 89px auto 0 auto;
`

const CarouselArrows = styled.button`
  margin: 5px;
  color: #D9D9D9;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  &:hover{
    color: #FF5539;
  }
`

const CarouselOuter = styled.div`
  overflow: hidden;
  width: 60%;
  max-width: 1000px ; 
`

const CarouselInner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`

export const CarouselItem = styled.div`
  width: ${props => props.width}%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 396px;
  background: rgb(255,37,37);
  background: radial-gradient(circle, rgba(255,37,37,1) 0%, rgba(233,233,233,1) 49%, rgba(255,0,0,0.46495693003764005) 100%);
  color: #fff;
`

const CarouselContainer = (prop) => {
  const { children } = prop;

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);


  const updateIndex = (newIndex) => {

    let index = newIndex;

    if (index < 0) {

      index = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {

      index = 0;
    }

    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <CarouselSection>
      <CarouselButton>Кнопка</CarouselButton>
      <CarouselHeader>Новогодние традиции в разных странах</CarouselHeader>
      <CarouselWrapper>
        <CarouselArrows onClick={() => {
          updateIndex(activeIndex - 1);
        }}
        >
          ◀
        </CarouselArrows>
        <CarouselOuter
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          <CarouselInner

            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >

            {React.Children.map(children, (child) => React.cloneElement(child, { width: "100" }))}

          </CarouselInner>

        </CarouselOuter>
        <CarouselArrows onClick={() => {
          updateIndex(activeIndex + 1);
        }}
        >
          ▶
        </CarouselArrows>
      </CarouselWrapper>
    </CarouselSection>
  );
};

export default CarouselContainer;
