import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientBgColor});
`
export const ResponsiveCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
`
export const Heading = styled.h1`
  font-size: 35px;
  font-family: 'Roboto';
  color: #ffffff;
`
export const Paragraph = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
  color: #ffffff;
`
export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
export const ColorCodesCont = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const ColorCode = styled.p`
  font-size: 20px;
  color: #ffffff;
`
export const ColorButtonCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GenerateButton = styled.button`
  height: 35px;
  width: 100px;
  border: none;
  background-color: #00c9b7;
  border-radius: 5px;
  color: #1e293b;
  margin-top: 30px;
  cursor: pointer;
`
export const InputColors = styled.input`
  height: 45px;
  width: 100px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`
