import { ImageContainer } from '../ImageContainer/ImageContainer'

import pin1 from '@/assets/images/pin1.jpg'
import pin2 from '@/assets/images/pin2.jpg'
import pin3 from '@/assets/images/pin3.jpg'
import pin4 from '@/assets/images/pin4.jpg'
import pin5 from '@/assets/images/pin5.jpg'

import * as S from './FeedSection.styles'

export function FeedSection() {
  return(
    <S.Container>
      <ImageContainer sizeImg='lg'>
        <img src={pin1} alt="Carty pin"/>
      </ImageContainer>

      <ImageContainer sizeImg='sm'>
        <img src={pin2} alt="Carty pin"/>
      </ImageContainer>

      <ImageContainer sizeImg='md'>
        <img src={pin3} alt="Carty pin"/>
      </ImageContainer>

      <ImageContainer sizeImg='md'>
        <img src={pin4} alt="Carty pin"/>
      </ImageContainer>

      <ImageContainer sizeImg='1-sm'>
        <img src={pin5} alt="Carty pin"/>
      </ImageContainer>
    </S.Container>
  )
}