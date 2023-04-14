import { styled } from '@/presentation/external/stitches/core'

export const Wrapper = styled('main', {
  maxWidth: '1747px',
  margin: 'auto',
  marginTop: '8rem',
  paddingBottom: '2rem',
  
  '@bp3': {
    px: '1.2rem',
  },

  '@bp2': {
    px: '0.6rem',
  },

  '@bp1': {
    px: '1.6rem',
    marginTop: '1.5rem',
    marginBottom: '8rem',
  }
})