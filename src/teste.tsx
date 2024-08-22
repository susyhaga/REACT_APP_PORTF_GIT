import styled from 'styled-components'

// Tipagem das propriedades do botão
type BotaoProps = {
  principal: boolean
  fontSize?: string // Propriedade opcional
  color?: string // Propriedade opcional, porque às vezes pode não ser passada
}

// Estilização do botão utilizando styled-components
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  color: ${(props) =>
    props.color ? props.color : 'white'}; // Define a cor do texto
  font-size: ${(props) =>
    props.fontSize || '16px'}; // Define o tamanho da fonte
`

// Estilização de um botão de perigo baseado no botão principal
const BotaoPerigo = styled(Botao)`
  background-color: red; // Sobrescreve o background-color para vermelho

  span {
    text-decoration: line-through; //estilizando a tag criada no atributo AS (no caso a tag a)
  }
`

function Teste() {
  return (
    <>
      {/* Uso do componente Botao com propriedades */}
      <Botao principal color="black">
        Send
      </Botao>

      {/* Uso do componente Botao sem fontSize (usa o valor padrão) */}
      <Botao fontSize="14px" principal={false}>
        Cancel
      </Botao>

      {/* Uso do componente BotaoPerigo...sem as props OPCIONAOS...entao ofontesize sera 16px e o color sera WHITE */}
      <BotaoPerigo as="a" principal>
        <span>DANGER: do not click here</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
