import styled from 'styled-components'

// я забыл какой пример нейминга был показан на созвоне
// пусть пока что будет так

export const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1240px;
`
export const Title = styled.p`
  margin-bottom: 20px;
`
// Ничего не пришло в голову. потом переименовать
export const Div = styled.div`
  position: relative;
`

export const Label = styled.label`
  position: absolute;
  top: -20px;
  left: 0;
`
export const LabelLink = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const Input = styled.input`
  width: 342px;
  height: 42px;
  background: #f7f3f3;
  border: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
`
