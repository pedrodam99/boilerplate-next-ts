import * as S from './styles'

const Main = () => (
  <S.Wrraper>
    <S.Logo
      src="/img/logo_next.svg"
      alt="Imagem de um Átomo com um texto escrito React Avançado ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJs e Styled Components
    </S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor na frente de uma tela com código"
    />
  </S.Wrraper>
)

export default Main
