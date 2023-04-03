import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const { styled, css, globalCss, theme, createTheme, getCssText, config } = createStitches({
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  theme: {
    colors: {
      red400: '#E60023',
      gray100: '#F3F0EB',
      gray600: '#282B2D',
      gray800: '#1A1D1E',
      gray900: '#0E0F0F',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px'
    },
    fontSizes: {
      1: '1.2rem',
      2: '1.6rem',
      3: '2rem',
      4: '2.4rem',
      5: '3.2rem',
      6: '4.8rem',
      7: '6.4rem',
      8: '8.2rem'
    },
    fonts: {
      primary: 'Poppins, apple-system, sans-serif'
    },
    radii: {
      1: '5px',
      2: '8px',
      3: '11px',
      4: '15px',
      5: '18px',
      6: '29px',
      7: '45px',
      8: '107px'
    },
    zIndices: {
      0: -1,
      1: 10,
      2: 20,
      3: 30,
      4: 40,
      max: 999
    }
  },

  utils: {
    m: (value: Stitches.ScaleValue<'space'> | string) => ({
      margin: value
    }),
    mt: (value: Stitches.ScaleValue<'space'> | string) => ({
      marginTop: value
    }),
    mr: (value: Stitches.ScaleValue<'space'> | string) => ({
      marginRight: value
    }),
    mb: (value: Stitches.ScaleValue<'space'> | string) => ({
      marginBottom: value
    }),
    ml: (value: Stitches.ScaleValue<'space'> | string) => ({
      marginLeft: value
    }),
    mx: (value: Stitches.ScaleValue<'space'> | string) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: Stitches.ScaleValue<'space'> | string) => ({
      marginTop: value,
      marginBottom: value
    }),
    px: (value: Stitches.ScaleValue<'space'> | string) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.ScaleValue<'space'> | string) => ({
      paddingTop: value,
      paddingBottom: value
    }),
  }
})