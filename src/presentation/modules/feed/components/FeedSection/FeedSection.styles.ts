import { styled } from '@/presentation/external/stitches/core'

export const Container = styled('section', {
  width: '100%',

  columnCount: '7',
  columnGap: '1.6rem',

  '@bp3': {
    columnCount: '5'
  },
  
  '@bp2': {
    columnCount: '3'
  },

  '@bp1': {
    columnCount: '2'
  }
})