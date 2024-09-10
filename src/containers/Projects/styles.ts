import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr; //2 colunas
  column-gap: 36px;
  row-gap: 40px;

  //RESPONSIVIDADE
  @media (max-width: 768px) {
    grid-template-columns: 1fr; //1 coluna
    column-gap: 0;
    row-gap: 16px;
  }
`
