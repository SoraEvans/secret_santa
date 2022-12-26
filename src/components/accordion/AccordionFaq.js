import React, { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material'
import ArrowDownward from '@mui/icons-material/ArrowDownward'
import DATA_FAQ from '../../constants'
import { AccordionSection, AccordionWrapper, Container, Title } from './style'

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
            >
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={<ArrowDownward />}
              >
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>{item.answer}</AccordionDetails>
            </Accordion>
          ))}
        </AccordionWrapper>
      </Container>
    </AccordionSection>
  )
}

export default AccordionFaq
