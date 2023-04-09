import { CatProps } from '@/business/types/cat'

const initialUrl = {
  base_url: 'https://api.thecatapi.com/v1/images/search?',
  limit: 'limit=50&',
  auth: `api_key=${import.meta.env.VITE_API_KEY}`
}

export async function CatService(): Promise<CatProps[]> { 
  const url = initialUrl.base_url + initialUrl.limit + initialUrl.auth
  
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data as CatProps[]
  } catch (error) {
    throw new Error('Failed to fetch cats from API')
  }

}

export type { CatProps }