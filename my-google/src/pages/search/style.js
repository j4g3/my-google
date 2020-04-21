import styled from 'styled-components'

export const Container = styled.div`

  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100%;

`

export const Itens = styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  gap: 10px;
`
export const Iten = styled.div`
  margin: 5px;
  margin-right: 6.93%;
  margin-left: 6.93%;
  padding: 15px;
  background: #fff;
  box-shadow: 0 0 4px 0 rgba(0,0,0,0.09);
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.09);
  width: 31.25%;
  @media (max-width: 547px) {
    width: fit-content;
  }
`
export const Link = styled.a`
  color: #333;
  text-decoration: none;
  :hover{
    text-decoration: underline;
    transition: all linearc .3s;
    color: #0099ff;
  }
`
export const Title = styled.span`
  font-size: 19px;
  font-weight: bold;
`
export const CenterInput = styled.div`
  padding: 15px;
  margin-left: 6.93%;
  margin-right: 6.93%;
`