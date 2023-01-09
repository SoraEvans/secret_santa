import { Tabs, Tab, Box, styled } from '@mui/material'

export const TabsWrapper = styled(Box)`
  position: absolute;
  top: 40%;
  right: 12px;
`

export const TabsInner = styled(Tabs)`
  width: 45px;

  .MuiTabs-indicator {
    background-color: red;
  }

  button:hover,
  button:focus {
    background-color: #ffbfbf;
  }
  button.Mui-selected {
    color: #000;
    background-color: #ffbfbf;
  }
`
export const TabItem = styled(Tab)`
  writing-mode: vertical-lr;
  font-size: 16px;
  align-self: center;
  background-color: #f2eeee;
  text-transform: none;
  height: 181px;
`
export const TabBody = styled(Box)`
  position: relative;
  top: 100px;
  left: 150px;
`
