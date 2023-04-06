import { BrowserRouter } from 'react-router-dom'
import Routes from '@/shared/constants/routes'

import { globalStyles } from '@/presentation/external/stitches/global'

export default function App() {
  globalStyles()

  return(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}