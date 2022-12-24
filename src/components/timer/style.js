import { Box, CircularProgress, styled, Typography } from '@mui/material'

export const TimerWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const BoxWrapper = styled(Box)`
  position: relative;
  display: inline-flex;
`

export const BoxInner = styled(Box)`
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

export const TimerItem = styled(Typography)`
  font-size: 24px;
  position: relative;
`

export const CircularProgressStyle = styled(CircularProgress)`
  color: red;
`

export const TimerTitle = styled(Typography)`
  margin: 0 0 30px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
`
