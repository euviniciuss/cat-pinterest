import { styled } from "@/presentation/external/stitches/core"

export const Button = styled('button', {
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: '$red400',
  borderRadius: '6rem',
  padding: '1.5rem 1.6rem',
  transition: 'filter 0.2s',
  color: '$gray100',
  fontSize: '1.5rem',
  fontWeight: '600',
  textAlign: 'center',

  '&:focus': {
    outline: 'none',
  },

  '&:hover': {
    filter: 'brightness(0.9)'
  }
})