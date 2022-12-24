import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 80px;
`
export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 87px;
`
export const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 12px;
`
export const SubTitle = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin: 0 auto;
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 633px;
  height: 94px;
  background: #f7f3f3;
  border: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 85px;
  padding: 0 20px 0 20px;
`

export const Input = styled.input`
  width: 633px;
  height: 82px;
  background: #f7f3f3;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 28px;
  text-align: center;
  margin-bottom: 50px;
`
export const DivInput = styled.div`
  position: relative;
`
export const Label = styled.label`
  position: absolute;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  top: -30px;
  left: 0;
`
export const P = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`
export const Cover = styled.div`
  margin-bottom: 85px;
`

export const CoverButton = styled.button`
  width: 81px;
  height: 81px;
  background: #ffd5d5;
  border-radius: 3px;
  font-size: 58px;
`
export const SmallInput = styled(Input)`
  height: 50px;
  margin-bottom: 46px;
`
export const SmallLabel = styled(Label)`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  top: -23px;
`

export const CreateButton = styled.button`
  width: 293px;
  height: 81px;
  background: #fd9797;
  border-radius: 2px;
  border: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`
export const CancellButton = styled(CreateButton)`
  background: #d9d9d9;
  color: #9b9b9b;
`
export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Select = styled.select`
  width: 304px;
  height: 61px;
  background: #f7f3f3;
  border: 2px solid rgba(0, 0, 0, 0.2);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`
export const CostDiv = styled(ButtonsDiv)`
  margin-bottom: 85px;
`

export const CostInput = styled.input`
  width: 304px;
  height: 55px;
  background: #f7f3f3;
  border: 2px solid rgba(0, 0, 0, 0.2);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`
