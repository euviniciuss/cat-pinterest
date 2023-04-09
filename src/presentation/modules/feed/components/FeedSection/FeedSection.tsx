import { useState, useEffect } from 'react'
import { CatService, CatProps } from '@/infra/services/cat.service'
import { Page } from '@/presentation/shared/components/layout'

import { ImageContainer } from '../ImageContainer/ImageContainer'

import * as S from './FeedSection.styles'

export function FeedSection() {
  const [images, setImages] = useState<CatProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  async function loadCats() {
    setIsLoading(true)

    try {
      const data = await CatService()
      setImages(data)
      setIsLoading(false)
    } catch (err) {
      console.error(err)
    }
  }
  
  useEffect(() => {
    loadCats()
  }, [])

  return(
    <>
      { isLoading && <Page.Loading /> }
      { !isLoading &&
        <S.Container>
          {
            images.map((image: any) => ( 
              <ImageContainer key={image.id}>
                <img src={image.url} alt="cat image"/>
              </ImageContainer>
            ))
          }  
        </S.Container>
      }
    </>
  )
}