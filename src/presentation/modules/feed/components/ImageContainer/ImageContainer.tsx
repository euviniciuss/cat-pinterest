import { PropsWithChildren } from 'react'

import * as S from './ImageContainer.styles'

export function ImageContainer({ children }: PropsWithChildren) {
  return(
    <S.Container role='button'>{ children }</S.Container>
  )
}