import { Link } from 'react-router-dom'

import logo from '@/assets/icons/logo-pinterest.svg'

export function Logo() { 
  return(
    <Link to='/'>
      <img src={logo} alt="Logo Pinterest com P envolta de circulo vermelho" width={32} height={32}/> 
    </Link>
  )
}
