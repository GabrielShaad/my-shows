import { useQuery } from '@tanstack/react-query'
import { getShows } from '@/api'

import Page from '@/components/Page'
import Search from '@/components/Search'
import Shows from '@/components/Shows'
import { useState } from 'react'

function Home() {
    const [search, setSearch] = useState('boys')

    const { data, isPending } = useQuery({
        queryKey: ['shows', { search }],
        queryFn: async () => {
            const data = await getShows(search)
            return data
        },
    })

    return (
        <Page>
            <Search setSearch={setSearch} />
            <Shows isLoading={isPending} shows={data} />
        </Page>
    )
}

export default Home
