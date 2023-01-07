import React, { useState } from 'react'
import {
  Accordion,
  AccordionSummary
} from '@mui/material'
import ArrowDownward from '@mui/icons-material/ArrowDownward'
import DATA_FAQ from '../../constants'
import { AccordionSection, AccordionWrapper, Container, QuestionText, StyledAccordionDetails, Title } from './style'

const AccordionFaq = () => {
  const [expanded, setExpanded] = useState(false)
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <AccordionSection>
      <Container>
        <Title>Вопросы о сервисе</Title>
        <AccordionWrapper>
          {DATA_FAQ.map((item, n) => (
            <Accordion
              expanded={expanded === `panel${n + 1}`}
              onChange={(_, isExpanded) => handleChange(isExpanded, `panel${n + 1}`)}
              style={{ borderRadius: '4px' }}
            >
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={<ArrowDownward />}
                style={{ border: '2px solid #D8D2CD', borderRadius: 4 }}
              >
                <QuestionText>{item.question}</QuestionText>
              </AccordionSummary>
              <StyledAccordionDetails>{item.answer}</StyledAccordionDetails>
            </Accordion>
          ))}
        </AccordionWrapper>
      </Container>
    </AccordionSection>
  )
}

export default AccordionFaq
