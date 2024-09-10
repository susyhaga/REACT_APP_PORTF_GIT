//5) Importando estilo de styles.ts e apelidando Titulo para TituloStyle para evitar
//conflitos de nomes (aqui tb tem uma cons chamada TITULO)
import { Title as TitleStyle } from './styles'

//2) // Definição de tipos das propriedades que o componente aceitará
//6) exportar Props
export type Props = {
  children: string
  fontSize?: number
}
// Com a prop children permite que você passe o conteúdo que será exibido dentro do componente Titulo.
// No caso, especifiquei que children é do tipo string, o conteúdo passado deve ser um texto.

//1)... 3)precisamos definir o tipo da propriedade aqui
// Componente estilizado, renomeado para evitar conflitos

const Titulo = (props: Props) => (
  <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
)

//4)exportar Titulo no Sidebar e cia
export default Titulo
