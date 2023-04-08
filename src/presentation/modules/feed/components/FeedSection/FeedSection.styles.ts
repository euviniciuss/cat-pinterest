import { styled } from '@/presentation/external/stitches/core'

export const Container = styled('section', {
  width: '100%',

  columnCount: '7',
  columnGap: '1.6rem',

  div: {
    '& + div': {
      mt: '1.6rem',
    }

  }
})