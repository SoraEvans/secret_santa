import { Tabs, Tab, Box, styled } from '@mui/material'

export const BoxWrapper = styled(Box)`
  padding: 180px 0 0 220px;
`

export const TabBox = styled(Tabs)`
  width: 100%;
  max-width: 360px;
  height: 50px;
  margin: 0 0 88px 0;
`

export const TabItem = styled(Tab)`
  text-transform: none;
  background-color: #f2eeee;
  &:active,
  &:hover {
    background-color: #ffbfbf;
  }
`

export const BoxItem = styled(Box)``
