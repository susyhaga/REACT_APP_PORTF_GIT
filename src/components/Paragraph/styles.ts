import styled from 'styled-components'
//importar o os tipos de propridades
import { Props } from '.'

//usar Props e estilizar elas
export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  //definindo valores de color
  color: ${(props) =>
    props.propType === 'primary'
      ? props.theme.primaryColor
      : props.theme.secondaryColor};
  line-height: 22px;
  text-align: justify;

  @media (max-width: 768px) {
    max-width: 320px;
    text-align: justify;
    word-spacing: -0.2em;
  }
`
