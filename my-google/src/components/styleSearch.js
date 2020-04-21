import styled from 'styled-components'

export const Input = styled.input`
  background: none;
  border: none;
  width: 80%;
  padding: 10px;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  outline: none;
  @media (max-width: 547px) {
    width: 70%;
  }
`

export const Span = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
`

export const DivInput = styled.div`
  flex: 1;
  display: flex;
`
export const AntiDiv = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #dfe1e5;
  width: 35.94%;
  border-radius: 24px;
  @media (max-width: 547px) {
    width: auto;
    margin-left: 6.93%;
    margin-right: 6.93%;
  };
  
`
export const Svg = styled.svg`
  width: 20px;
  height: 20px;
  fill: #9AA0A6;
  
`
export const Title = styled.h1`
color: #fff;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  @media (max-width: 574px){
  }
`
export const DivButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .6)
`