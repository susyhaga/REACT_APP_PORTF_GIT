import styled from 'styled-components'
//importar o os tipos de propridades
import { Props } from '.'

//usar Props e estilizar elas
export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
