//1) importar a const P de styles.ts
import { P } from './styles'

//2) // Definição de tipos das propriedades que o componente aceitará
//6) exportar Props
export type Props = {
  children: string
  propType?: 'primary' | 'secondary'
  fontSize?: number
}
//com CHILDREN criamos um componente que aceita coisas (string no caso) dentro dele

// 3)precisamos definir o tipo da propriedade aqui

//7) desestruturacao para aceitar a prop propType (de styles)
const Paragraph = ({ children, propType = 'primary', fontSize }: Props) => (
  <P propType={propType} fontSize={fontSize}>
    {children}
  </P>
)

//4)exportar Paragraph
export default Paragraph
