import { BrowserRouter } from 'react-router-dom'
import Routes from '@/shared/constants/routes'

import { Page } from '@/presentation/shared/components/layout'

import { globalStyles } from '@/presentation/external/stitches/global'

export default function App() {
  globalStyles()

  return(
    <BrowserRouter>
      <Page.Header />
      <Routes />
    </BrowserRouter>
  )
}