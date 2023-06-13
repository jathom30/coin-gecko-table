import axios from 'axios'
import { Token } from './types'

// const baseURL = 'https://pro-api.coinmarketcap.com'
const baseURL = 'https://api.coingecko.com/api/v3'

const client = axios.create({ baseURL })

// this is a little overkill for this sample app
const baseGet = async (route: string) => {
  try {
    const response = await client.get(route)
    return response.data
  } catch (err) {
    console.error(err)
    throw new Error()
  }
}

export async function getCrypto(): Promise<Token[]> {
  return (await baseGet(`/coins/markets?vs_currency=usd&per_page=10`))
}