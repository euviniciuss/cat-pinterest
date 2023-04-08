import { PropsWithChildren } from 'react'

import * as S from './Wrapper.styles'

export function Wrapper({ children }: PropsWithChildren) {
  return <S.Wrapper>{children}</S.Wrapper>
}