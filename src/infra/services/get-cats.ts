import { CatProps } from '@/business/types/cat'

export async function CatService(): Promise<CatProps[]> { 
  const AUTH_TOKEN = import.meta.env.VITE_API_KEY

  const url = new URL('https://api.thecatapi.com/v1/images/search')
  url.searchParams.set('limit', '30')
  url.searchParams.set('api_key', AUTH_TOKEN)
  
  try {
    const response = await fetch(url.toString())
    const data = await response.json()

    return data as CatProps[]
  } catch (error) {
    throw new Error('Failed to fetch cats from API')
  }

}

export type { CatProps }