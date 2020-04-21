import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import {
  Container,
  Iten,
  Itens,
  Link,
  Title,
  CenterInput
} from './style'
import InputSearch from '../../components/inputSearch'

export default function Search({ match, history }) {
  const [itens, setItens] = useState()
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    async function search() {
      const response = await api.get(`/search/${match.params.query}`)
      setItens(response.data)
      setLoading(false)
    }
    search()
  }, [match.params.query])

  return (
    <>
      {isLoading && <span>Carregando...</span>}
      {!isLoading && itens.length > 0 && (
        <>
          <CenterInput>

            <InputSearch
              history={history}
              query={match.params.query}
              itens={setItens}
              loading={setLoading}
            />
          </CenterInput>
          <Container>


            <Itens>
              {itens.map(i => (
                <Iten key={i.Link}>
                  <Link href={i.Link} target="_blank">
                    <Title>{i.Title}</Title>
                  </Link>

                </Iten>
              ))}
            </Itens>
          </Container>
        </>
      )}
      {!isLoading && itens <= 0 && (
        <span>Achei porra nenhuma</span>
      )}
    </>
  )

}