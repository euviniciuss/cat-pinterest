import { useState, useEffect } from 'react'

import { ImageContainer } from '../ImageContainer/ImageContainer'

import * as S from './FeedSection.styles'

export function FeedSection() {
  const [images, setImages] = useState([])

  const initialUrl = 'https://api.thecatapi.com/v1/images/search?limit=15&'
  const auth = 'YOUR API KEY'

  const url = initialUrl+auth

  async function loadImages() {
    await fetch(url, { headers: { 'Authorization': `x-api-key ${auth}` } })
      .then(response => response.json())
      .then(data => setImages(data))
  }

  useEffect(() => {
    loadImages()
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