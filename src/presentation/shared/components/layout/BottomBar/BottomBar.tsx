import { IconButton } from '@/presentation/shared/components/form'

import user from '@/assets/images/user.jpg'

import { House, Bell, ChatCircleDots } from '@phosphor-icons/react'
import { Actions } from '../Header/Actions'

import * as S from './BottomBar.styles'

export function BottomBar() {
  return(
    <S.Container>
      <S.Content>
        <IconButton>
          <House size={28} color='#BDB6A9' weight='fill' />
        </IconButton>

        <IconButton>
          <Bell size={28} color='#BDB6A9' weight='fill' />
        </IconButton>

        <IconButton>
          <ChatCircleDots size={28} color='#BDB6A9' weight='fill' />
        </IconButton>

        <Actions.UserSection>
          <img src={user} alt='Icon user' />
        </Actions.UserSection>
      </S.Content>
    </S.Container>
  )
}