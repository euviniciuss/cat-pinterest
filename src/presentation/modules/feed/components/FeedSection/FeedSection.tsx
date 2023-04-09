import { useState, useEffect } from 'react'
import { CatService, CatProps } from '@/infra/services/cat.service'

import { ImageContainer } from '../ImageContainer/ImageContainer'

import * as S from './FeedSection.styles'

export function FeedSection() {
  const [images, setImages] = useState<CatProps[]>([])

  async function loadCats() {
    try {
      const data = await CatService()
      setImages(data)
    } catch (err) {
      console.error(err)
    }
  }
  

  useEffect(() => {
    loadCats()
  }, [])

  return(
    <S.Container>
      {
        images.map((image: any) => ( 
          <ImageContainer key={image.id}>
            <img src={image.url} alt="cat image"/>
          </ImageContainer>
        ))
      }  
    </S.Container>
  )
}