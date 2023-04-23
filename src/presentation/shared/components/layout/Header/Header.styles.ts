import { styled } from '@/presentation/external/stitches/core'

export const Container = styled('header', {
  width: '100vw',
  height: '8rem',
  background: '$gray800',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '$2',

  '@bp1': {
    display: 'none',
  }
})

export const Wrapper = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.6rem',
  padding: '0.4rem 2.6rem',
})

export const NavigationContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  
  a: {
    textAlign: 'center',
    color: '$gray100',
    fontWeight: '600',
    fontSize: '$2',
    transition: 'filter 0.2s',
    whiteSpace: 'nowrap',

    '&:first-child': {
      background: '$red400',
      borderRadius: '5.5rem',
      padding: '1.2rem 1.6rem'
    },

    '&:hover': {
      filter: 'brightness(0.9)'
    }
  }
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.15rem'
})

export const UserSection = styled('button', {
  border: 'none',
  outline: 'none',
  background: 'transparent',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '0.6rem',
  borderRadius: '50%',
  transition: 'background 0.2s',

  '&:focus': {
    outline: 'none',
  },

  '&:hover': {
    background: '$gray500',
  },

  
  img: {
    width: '3.2rem',
    height: '3.2rem',
    borderRadius: '50%',
    objectFit: 'cover',
  },

  '@bp1': {
    padding: '0.3rem',

    img: {
      width: '5rem',
      height: '5rem',
    }
  }

})