import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

//para importar um componente styles.ts -----> styled(P)
export const Description = styled(P)`
  //definindo estilo do antigo paragrafo (agora description)
  margin-top: 24px;
  margin-bottom: 40px;
`

//definindo estilo do botao (agora ButtonTheme)
export const ButtonTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: bold;
  background: ${(props) => props.theme.primaryColor};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px; //para nao ficar colado no topo ao rolar
  left: 0;
  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
