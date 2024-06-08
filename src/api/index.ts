import { ShowsResponse } from '@/types/Shows'
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.tvmaze.com',
})

const getShows = async (query: string): Promise<ShowsResponse[]> => {
    const response = await api.get(`search/shows?q=${query}`)
    return response.data
}

export { getShows }
