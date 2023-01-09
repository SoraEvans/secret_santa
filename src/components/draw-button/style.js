import { styled  as st } from "@mui/material/styles";
import styled from 'styled-components'
import { Button } from "@mui/material";

export const ButtonBlock = styled.div`
display: block;
position: relative;
top: 100px;
`

export const StartDrawButton = st(Button)({
  display: 'block',
  textAlign: 'center',
  color: '#000000',
  fontWeight: '400',
  fontSize: '20px',
  margin: '47px 0 17px 0',
  height: '81px',
  width: '291px',
  backgroundColor: '#fd9797',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#ffbfbf',
  },
  '&:disabled': {
    color: '#A3A3A3',
    backgroundColor: '#EAEAEA'
  }
})

export const ButtonText = styled.div`
  width: 291px;
  color: #979797;
`