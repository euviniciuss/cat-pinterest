import { styled, keyframes } from '@/presentation/external/stitches/core'

const bounce = keyframes({
  from: {
    transform: 'translate(0, 20px)'
  },
  to: {
    transform: 'translate(0, 0)'
  }
})

export const Container = styled('main', {
  height: '100vh',
  width: '100vw',

  position: 'fixed',
  bottom: 0,
  right: 0,
  left: 0,
  top: 0,

  overflow: 'hidden',

  backgroundColor: 'rgba(0, 0, 0, 0.5)',

  backdropFilter: 'blur(15px)',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  zIndex: '$max',
})

export const Content = styled('div', {
  display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',

    img: {
      animation: `${bounce} 1s ease infinite alternate`
    },

    p: {
      color: '$gray100',
      marginTop: '3rem',
      fontSize: '$3'
    }

})