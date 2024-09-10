const darkTheme = {
  primaryColor: '#ffff',
  secondaryColor: '#eee',
  backgroundColor: '#282A35',
  buttonColor: '#ffff',
  borderColor: '#c1c1c1'
}

export default darkTheme
//criar um tipo para as propriedadesde darkTheme para evitar conflitos no App.tsx

export type Theme = {
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  buttonColor: string
  borderColor: string
}
