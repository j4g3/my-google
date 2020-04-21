import React from 'react'
import {
  Container,
  BoxContainer,
  Title,
  Overlay
} from './style'
import InputSearch from '../../components/input'
export default function Main({ history }) {

  return (
    <BoxContainer>
      <Overlay>
        <Container>
          <Title>Google do J4G3</Title>
          <InputSearch history={history} />
          {/* <DivButtons>
          </DivButtons> */}
        </Container>
      </Overlay>

    </BoxContainer>
  )
}