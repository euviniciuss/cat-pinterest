import { MagnifyingGlass } from '@phosphor-icons/react'

import * as S from './Search.styles'

export function Search() {
  return(
    <S.Container>
      <MagnifyingGlass size={18} color='#BDB6A9' weight='bold' />

      <S.Input type='text' placeholder='Search'/>
    </S.Container>
  )
}