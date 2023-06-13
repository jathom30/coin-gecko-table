import axios from 'axios'
import { Token } from './types'

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

// query params set to get one page of 10 results sorted by market cap
// currency is hardcoded to usd, ideally we would get some user input or guess at user location for currency
export async function getCrypto(): Promise<Token[]> {
  return (await baseGet(`/coins/markets?vs_currency=usd&per_page=10`))
}