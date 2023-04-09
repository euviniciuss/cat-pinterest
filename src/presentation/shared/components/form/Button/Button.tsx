import { PropsWithChildren } from 'react'

import * as S from './Button.styles'

export function Button({ children }: PropsWithChildren) {
  return(
    <S.Button>{children}</S.Button>
  )
}