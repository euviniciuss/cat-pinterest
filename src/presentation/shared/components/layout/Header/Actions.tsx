import { IconButton } from '@/presentation/shared/components/form'

import user from '@/assets/images/user.jpg'

import { Bell, ChatCircleDots, CaretDown } from '@phosphor-icons/react'

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

      <S.UserSection>
        <img src={user} alt='Icon user' />
      </S.UserSection>
      <CaretDown size={18} color='#BDB6A9' weight='bold' />
    </S.ActionsContainer>
  )
}

Actions.UserSection = S.UserSection