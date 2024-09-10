import Title from '../Title'
import Paragraph from '../Paragraph'
import { Card, LinkButton } from './styles'

// //o styled do componente sempre vem antes de tudo
// const Card = styled.div`
//   border: 1px solid #c1c1c1;
//   padding: 16px;
// `
// ctrl + espaco = ver todas as propriedades do componente PARAGRAPH
const Project = () => {
  return (
    <Card>
      <Title fontSize={16}>Projects</Title>
      <Paragraph propType="secondary">
        Task list using the VueJS framework.
      </Paragraph>
      <LinkButton>Visualizar</LinkButton>
    </Card>
  )
}

export default Project
