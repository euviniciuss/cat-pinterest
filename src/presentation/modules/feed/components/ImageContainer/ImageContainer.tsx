import { ReactNode } from 'react'

import * as S from './ImageContainer.styles'

type Props = {
  sizeImg: 'sm' | 'md' | 'lg' | '1-sm'
  children: ReactNode
}

export function ImageContainer({ children, sizeImg = 'md' }: Props) {
  return(
    <S.Container role='button' size={sizeImg}>{ children }</S.Container>
  )
}