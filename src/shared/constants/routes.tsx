import { Routes as Router, Route } from 'react-router-dom';

import Feed from '@/presentation/pages/feed'

export default function Routes() {
  return(
    <Router>
      <Route path='/' element={<Feed />} />
      <Route path='/today' element={<Feed />} />
      <Route path='/create' element={<Feed />} />
    </Router>
  )
}