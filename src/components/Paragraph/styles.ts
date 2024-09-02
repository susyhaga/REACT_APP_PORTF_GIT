import styled from 'styled-components'
//importar o os tipos de propridades
import { Props } from '.'

//usar Props e estilizar elas
export const P = styled.p<Props>`
  font-size: 14px;
  //definindo valores de color
  color: ${(props) => (props.propType === 'primary' ? '#282a35' : '#949494')};
  line-height: 22px;
`
