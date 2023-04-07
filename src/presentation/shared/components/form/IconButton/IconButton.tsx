import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './IconButton.style'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function IconButton({ children, ...props }: Props) {
  return <S.Button {...props}>{children}</S.Button>
}