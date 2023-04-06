import { Link } from 'react-router-dom'

import * as S from './Header.styles'

export function Navigation() {
  return(
    <S.NavigationContainer>
      <Link to='/'>Página inicial</Link>
      <Link to='/today'>Hoje</Link>
      <Link to='/create'>Criar</Link>
    </S.NavigationContainer>
  )
}