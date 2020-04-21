import styled from 'styled-components'
import background from './assets/wallpaper.jpg'

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
  overflow: hidden;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  background: #fff;
  border: 1px solid #dfe1e5;
  width: 50%;
  border-radius: 24px;
  :hover{
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  }
  @media (max-width: 547px) {
    width: 70%
  }
  
`
export const Container = styled.div`

  /* height: 100%;
  min-height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center; */
`
export const BoxContainer = styled.div`
  padding: 0;
  margin: 0;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  width: 100%; 
  overflow: hidden;
  @media (max-width: 547px) {
    background-position: center center;
  }
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
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  @media (max-width: 574px){
    top: 5%;
    left: 50%;
    transform: translate(-50%, -10%);
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