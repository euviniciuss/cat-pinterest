import { styled } from '@/presentation/external/stitches/core'

export const Container = styled('div', {
  cursor: 'pointer',
  position: 'relative',
  width: '236px',

  img: {
    width: '100%',
    height: '100%',
    borderRadius: '$5',
    objectFit: 'cover'
  },

  variants: {
    size: {
      '1-sm': {
        height: '209px',
      },
      'sm': {
        height: '239px',
      },
      'md': {
        height: '314px',
      },
      'lg': {
        height: '427px',
      },
    }
  }
})