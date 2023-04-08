import { styled } from '@/presentation/external/stitches/core'

export const Container = styled('form', {
  height: '4.8rem',
  width: '100%',
  padding: '0 1.6rem',
  background: '$gray600',
  borderRadius: '$8',

  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  ml: '2rem'
})

export const Input = styled('input', {
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: 'none',
  color: '$gray100',
  fontSize: '$2',

  '&:focus': {
    outline: 'none',
    borderColor: 'transparent'
  },

  '&::placeholder': {
    fontWeight: '500'
  }
})