import { useState } from 'react'
import Sidebar from './containers/Sidebar/index'
import About from './containers/About/index'
import Project from './containers/Projects/index'
import EstiloGlobal, { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  //1) criar um estado para usartemadark ou light
  const [useDarkTheme, setUseDarkTheme] = useState(false)

  //2) criar funcao para trocar tema
  function changeTheme() {
    setUseDarkTheme(!useDarkTheme)
  }

  return (
    //3) condicao para tema dark ou tema light
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        {/* 4) passar a prop changeTheme no Sidebar*/}
        <Sidebar changeTheme={changeTheme} /> {/*propriedade={funcao}*/}
        <main>
          <About></About>
          <Project />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
