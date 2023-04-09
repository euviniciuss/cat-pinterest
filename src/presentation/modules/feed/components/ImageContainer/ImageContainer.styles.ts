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
})