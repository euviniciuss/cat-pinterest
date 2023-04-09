import { PropsWithChildren } from 'react'

import { HoverOptions } from './HoverOptions'

import * as S from './ImageContainer.styles'

export function ImageContainer({ children }: PropsWithChildren) {
  return(
    <S.Container role='button'>
      <HoverOptions />
      { children }
    </S.Container>
  )
}