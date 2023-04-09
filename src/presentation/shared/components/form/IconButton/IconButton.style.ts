import { styled } from "@/presentation/external/stitches/core"

export const Button = styled('button', {
  border: 'none',
  outline: 'none',
  background: 'transparent',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  
  borderRadius: '50%',
  transition: 'background 0.2s',

  '&:focus': {
    outline: 'none',
  },

  variants: {
    size: {
      'sm': {
        background: 'rgba(0, 0, 0, 0.6)',
        padding: '0.6rem',

        '&:hover': {
          background: 'rgba(0, 0, 0, 0.8)',
        },
      },
      'md': {
        padding: '1.2rem',

        '&:hover': {
          background: '$gray500',
        },
      },
    }
  }
})