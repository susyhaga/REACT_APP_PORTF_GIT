import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  font-family: "Inter", sans-serif;
}

body{
  padding-top: 80px;
//RESPONSIVIDADE
    @media(max-width:768px){
    padding-top: 16px;
    }
  }
`
export default EstiloGlobal

//APLICANDO CSS NA ESTUTURA: criando estilo do CONTAINER
export const Container = styled.div`
  //MAX-WIDTH: TAMANHO DA AREA UTIL
  max-width: 1024px; //layout: 1366px ............... espacamento: 171 x2 = 342px
  //1366-342(espacamento) = 1024px ..ALT NO FIGMA
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto; //col 1 col2
  column-gap: 56px; //espacaomento entre o SideBar e o About me
  //RESPONSIVIDADE
  @media (max-width: 768px) {
    max-width: 80%; ////MAX-WIDTH: TAMANHO DA AREA UTIL
    display: block;
  }

  img {
    max-width: 100%; //imagem fica de acordo com a area util
  }
`
