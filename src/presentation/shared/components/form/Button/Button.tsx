import { PropsWithChildren } from 'react'

import * as S from './Button.styles'

export function Button({ children, ...props }: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  return(
    <S.Button {...props}>{children}</S.Button>
  )
}