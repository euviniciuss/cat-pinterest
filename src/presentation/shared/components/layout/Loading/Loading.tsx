import logo from '@/assets/icons/logo-pinterest.svg'

import * as S from './Loading.styles'

export function Loading() {
  return(
    <S.Container>
      <S.Content>
        <img 
          src={logo}
          alt="Logo Pinterest"
          width={300}
          height={100}
        />

        <p>Carregando...</p>
      </S.Content>
    </S.Container>
  )
}