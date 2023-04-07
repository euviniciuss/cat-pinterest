import { IconButton } from '@/presentation/shared/components/form'
import { Bell, ChatCircleDots } from '@phosphor-icons/react'

import * as S from './Header.styles'

export function Actions() {
  return (
    <S.ActionsContainer>
      <IconButton>
          <Bell size={26} color='#BDB6A9' weight='fill' />
        </IconButton>

        <IconButton>
          <ChatCircleDots size={26} color='#BDB6A9' weight='fill' />
        </IconButton>
    </S.ActionsContainer>
  )
}