import React, { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material'
import ArrowDownward from '@mui/icons-material/ArrowDownward'

import styled from 'styled-components'

// *******Стили********
const AccordionSection = styled.section`
  background-color: #ffe7e7;
  padding: 120px 0;
`
//
const Container = styled.div`
  max-width: 1470px;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  margin-inline: auto;
`
//
const Title = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  margin: 0 0 40px 0;
`

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

// Временные вопросы и ответы
const dataFaq = [
  {
    id: 1,
    question: 'Lorem ipsum dolor sit amet, consectetur',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum. Morbi tristique senectus et netus et malesuada fames. Adipiscing tristique risus nec feugiat in fermentum '
  },
  {
    id: 2,
    question: 'Lorem ipsum dolor sit amet, consectetur',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum. Morbi tristique senectus et netus et malesuada fames. Adipiscing tristique risus nec feugiat in fermentum '
  },
  {
    id: 3,
    question: 'Lorem ipsum dolor sit amet, consectetur',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum. Morbi tristique senectus et netus et malesuada fames. Adipiscing tristique risus nec feugiat in fermentum '
  },
  {
    id: 4,
    question: 'Lorem ipsum dolor sit amet, consectetur',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum. Morbi tristique senectus et netus et malesuada fames. Adipiscing tristique risus nec feugiat in fermentum '
  },
  {
    id: 5,
    question: 'Lorem ipsum dolor sit amet, consectetur',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum. Morbi tristique senectus et netus et malesuada fames. Adipiscing tristique risus nec feugiat in fermentum '
  }
]

const AccordionFaq = () => {
  const [expanded, setExpanded] = useState(false)
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <AccordionSection>
      <Container>
        <Title>Часто задаваемые вопросы</Title>
        <AccordionWrapper>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
          >
            <AccordionSummary
              id="panel1-header"
              aria-controls="panel1-content"
              expandIcon={<ArrowDownward />}
            >
              <Typography>{dataFaq[0].question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{dataFaq[0].answer}</AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
          >
            <AccordionSummary
              id="panel2-header"
              aria-controls="panel1-content"
              expandIcon={<ArrowDownward />}
            >
              <Typography>{dataFaq[1].question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{dataFaq[1].answer}</AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
          >
            <AccordionSummary
              id="panel3-header"
              aria-controls="panel1-content"
              expandIcon={<ArrowDownward />}
            >
              <Typography>{dataFaq[2].question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{dataFaq[2].answer}</AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')}
          >
            <AccordionSummary
              id="panel4-header"
              aria-controls="panel1-content"
              expandIcon={<ArrowDownward />}
            >
              <Typography>{dataFaq[3].question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{dataFaq[3].answer}</AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel5'}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel5')}
          >
            <AccordionSummary
              id="panel5-header"
              aria-controls="panel1-content"
              expandIcon={<ArrowDownward />}
            >
              <Typography>{dataFaq[4].question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{dataFaq[4].answer}</AccordionDetails>
          </Accordion>
        </AccordionWrapper>
      </Container>
    </AccordionSection>
  )
}

export default AccordionFaq
