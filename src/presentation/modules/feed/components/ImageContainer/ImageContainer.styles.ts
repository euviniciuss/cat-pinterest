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
  }
})