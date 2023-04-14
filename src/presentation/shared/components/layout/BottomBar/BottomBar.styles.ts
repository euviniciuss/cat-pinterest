import { styled } from '@/presentation/external/stitches/core'

export const Container = styled('footer', {
  display: 'none',

  width: '100vw',
  height: '8rem',
  position: 'fixed',
  bottom: '0',
  left: '0',
  zIndex: '$max',
  marginBottom: '1.4rem',

  '@bp1': {
    display: 'block',
  }
})

export const Content = styled('div', {
  background: '$gray600',
  maxWidth: '260px',
  margin: 'auto',
  height: '100%',
  borderRadius: '6rem',

  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
})