import { styled } from "@/presentation/external/stitches/core"

export const Button = styled('button', {
  border: 'none',
  outline: 'none',
  background: 'transparent',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '1.2rem 1.2rem',
  borderRadius: '50%',
  transition: 'background 0.2s',

  '&:focus': {
    outline: 'none',
  },

  '&:hover': {
    background: '$gray500',
  }
})