import * as S from './styles'

const Main = ({ title = 'Titulo', description = 'Descrição' }) => (
  <S.Wrapper>
    <h1>{title}</h1>
    <p>{description}</p>
  </S.Wrapper>
)

export default Main
