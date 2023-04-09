import { Button, IconButton } from '@/presentation/shared/components/form'

import { UploadSimple, DotsThree } from '@phosphor-icons/react'

import * as S from './ImageContainer.styles'

export function HoverOptions() {
  return(
    <S.ContainerOptions className='hoverOptions'>
      <S.ContentOptions>
        <S.Header>
          <p>Meus Pins...</p>

          <Button>Salvar</Button>
        </S.Header>

        <S.Footer>
          <IconButton size='sm'>
            <UploadSimple size={20} color='#F3F0EB' weight='bold' />
          </IconButton>

          <IconButton size='sm'>
            <DotsThree size={20} color='#F3F0EB' weight='bold' />
          </IconButton>
        </S.Footer>
      </S.ContentOptions>
    </S.ContainerOptions>
  )
}