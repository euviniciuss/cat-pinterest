import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './IconButton.style'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode,
  size?: 'sm' | 'md'
}

export function IconButton({ children, size = 'md', ...props }: Props) {
  return <S.Button size={size} {...props}>{children}</S.Button>
}