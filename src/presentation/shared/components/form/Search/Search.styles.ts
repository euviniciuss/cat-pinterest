import { styled } from '@/presentation/external/stitches/core'

export const Container = styled('form', {
  height: '5.8rem',
  width: '100%',
  padding: '0 2rem',
  background: '$gray600',
  borderRadius: '$8',

  display: 'flex',
  alignItems: 'center',
  gap: '$2'
})

export const Input = styled('input', {
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: 'none',
  color: '$gray100',
  fontSize: '$3',

  '&:focus': {
    outline: 'none',
    borderColor: 'transparent'
  },

  '&::placeholder': {
    fontWeight: '500'
  }
})