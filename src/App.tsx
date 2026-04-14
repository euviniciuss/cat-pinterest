import { BrowserRouter } from 'react-router-dom'
import Routes from '@/shared/constants/routes'

import { Page } from '@/presentation/shared/components/layout'

import Clarity from '@microsoft/clarity';

import { globalStyles } from '@/presentation/external/stitches/global'

export default function App() {
  const projectId = "wbl4ai0vno"
  Clarity.init(projectId);

  globalStyles()

  return(
    <BrowserRouter>
      <Page.Header />
      <Routes />
      <Page.BottomBar />
    </BrowserRouter>
  )
}