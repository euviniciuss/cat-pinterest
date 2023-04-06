import { styled } from '@/presentation/external/stitches/core'

export const Container = styled('header', {
  width: '100vw',
  background: '$gray800',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '$1',
})

export const Wrapper = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1.6rem',
  padding: '2.8rem 1.7rem',
})

export const NavigationContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  
  a: {
    textAlign: 'center',
    color: '$gray100',
    fontWeight: '600',
    fontSize: '$3',
    transition: 'filter 0.2s',
    whiteSpace: 'nowrap',

    '&:first-child': {
      background: '$red400',
      borderRadius: '5.5rem',
      padding: '1.5rem 1.6rem'
    },

    '&:hover': {
      filter: 'brightness(0.9)'
    }
  }
  
})