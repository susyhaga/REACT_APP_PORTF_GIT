import styled from 'styled-components'

//importar const Card no index.tsx
export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`
export const LinkButton = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.buttonColor};
  font-size: 14px;
  padding: 8px;
  display: inline-block; //evita que o botao ocupe o espaco do paragrafo e mantem ele do tamanho certo
  margin-top: 24px;
`
