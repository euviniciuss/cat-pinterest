import { Logo } from './Logo'
import { Navigation } from './Navigation'

import { Search } from '@/presentation/shared/components/form'

import * as S from './Header.styles'

export function Header() {
  return(
    <S.Container>
      <S.Wrapper>
        <Logo />

        <Navigation />
        
        <Search />
        
        {/* 

        <Icon />
        <Icon />
        <UserSection /> */}
      </S.Wrapper>
    </S.Container>
  )
}