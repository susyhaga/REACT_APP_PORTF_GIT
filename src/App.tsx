import Sidebar from './containers/Sidebar/index'
import About from './containers/About/index'
import Projects from './containers/Projects/index'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <About></About>
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
