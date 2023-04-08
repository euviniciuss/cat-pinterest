import { PropsWithChildren } from 'react'

import { Header } from '../Header/Header'
import { Wrapper } from '../Wrapper/Wrapper'

export function Page({ children }: PropsWithChildren) {
  return <>{ children }</>
}

Page.Header = Header
Page.Wrapper = Wrapper