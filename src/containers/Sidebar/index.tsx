import Avatar from '../../components/Avatar'
import Title from '../../components/Title/index'
import Paragraph from '../../components/Paragraph'
import { Description, ButtonTheme, SidebarContainer } from './styles'

//1) tipar a funcao trocaTema
type Props = {
  changeTheme: () => void //" () " nao recebe parametro " void " nao retorna nada
}

//2) acessar a propriedade tipada changeTheme
const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Susy Haga</Title>
      <Paragraph propType="secondary" fontSize={16}>
        susyhaga
      </Paragraph>
      <Description propType="primary" fontSize={12}>
        Front-end Engineer jr
      </Description>
      {/* 3) passar propriedade no botao */}
      <ButtonTheme onClick={props.changeTheme}>Change theme</ButtonTheme>
    </SidebarContainer>
  </aside>
)
export default Sidebar
