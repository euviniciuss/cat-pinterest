import { styled } from "@/presentation/external/stitches/core"

export const Button = styled('button', {
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: '$red400',
  borderRadius: '5.5rem',
  padding: '1.2rem 1.6rem',
  transition: 'filter 0.2s',
  color: '$gray100',
  fontWeight: '600',

  '&:focus': {
    outline: 'none',
  },

  '&:hover': {
    filter: 'brightness(0.9)'
  }
})