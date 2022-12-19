import React, { useState, useEffect } from 'react'
import { CircularProgress, Typography, Box, styled } from '@mui/material'

const TimerWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

const BoxWrapper = styled(Box)`
  position: relative;
  display: inline-flex;
`
const BoxInner = styled(Box)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    position: absolute;
    bottom: -35px;
    left: 25px;
    font-size: 18px;
  }
`

const TimerItem = styled(Typography)`
  font-size: 24px;
  position: relative;
`

const CircularProgressStyle = styled(CircularProgress)`
  color: red;
`

const TimerTitle = styled(Typography)`
  margin: 0 0 30px 0;
  font-size: 24px;
`

const CountdownTimer = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date('12/31/2022 23:59:59')
    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Box>
      <TimerTitle>До нового года осталось:</TimerTitle>
      <TimerWrapper>
        <BoxWrapper>
          <CircularProgressStyle
            value={(days * 100) / (31 - 1)}
            variant="determinate"
            size={100}
          />
          <BoxInner>
            <TimerItem>{days}</TimerItem>
            <span>Дней</span>
          </BoxInner>
        </BoxWrapper>
        <BoxWrapper>
          <CircularProgressStyle
            value={(hours * 100) / (24 - 1)}
            variant="determinate"
            size={100}
          />
          <BoxInner>
            <TimerItem>{hours}</TimerItem>
            <span>Часов</span>
          </BoxInner>
        </BoxWrapper>
        <BoxWrapper>
          <CircularProgressStyle
            value={(minutes * 100) / (60 - 1)}
            variant="determinate"
            size={100}
          />
          <BoxInner>
            <TimerItem>{minutes}</TimerItem>
            <span>Минут</span>
          </BoxInner>
        </BoxWrapper>
        <BoxWrapper>
          <CircularProgressStyle
            value={(seconds * 100) / (60 - 1)}
            variant="determinate"
            size={100}
          />
          <BoxInner>
            <TimerItem>{seconds}</TimerItem>
            <span>Секунд</span>
          </BoxInner>
        </BoxWrapper>
      </TimerWrapper>
    </Box>
  )
}

export default CountdownTimer
