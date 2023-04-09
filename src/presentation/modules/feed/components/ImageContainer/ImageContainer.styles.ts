import { styled } from '@/presentation/external/stitches/core'

export const Container = styled('div', {
  cursor: 'pointer',
  position: 'relative',
  width: '236px',
  marginBottom: '1.6rem',

  img: {
    width: '100%',
    height: 'auto',
    borderRadius: '$5',
    objectFit: 'cover'
  },

  '@bp3': {
    width: '194px',
  },

  '@bp2': {
    width: '244px',
  },

  '@bp1': {
    width: '194px',
  },

  '&:hover': {
    '.hoverOptions': {
      visibility: 'visible',
    }
  }
})

export const ContainerOptions = styled('div', {
  visibility: 'hidden',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '$1',
  background: 'rgba(0,0,0,0.5)',
  borderRadius: '$5',
})

export const ContentOptions = styled('div', {
  width: '100%',
  height: '100%',
  padding: '2rem 1.2rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Header = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.5rem',

  p: {
    fontWeight: 'bold',
    fontSize: '$2'
  }
})

export const Footer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '1rem',
})