import { Grid } from '@mui/material'
import CardShow from '@/components/CardShow'
import { useQuery } from '@tanstack/react-query'
import { getShows } from '@/api'
import SkeletonCard from '../SkeletonCard'

interface ShowsProps {
    search: string
}

function Shows({ search }: ShowsProps) {
    const { data, isPending } = useQuery({
        queryKey: ['shows', { search }],
        queryFn: async () => {
            const data = await getShows(search)
            return data
        },
    })

    return (
        <section>
            <Grid
                container
                padding={2}
                spacing={2}
                alignItems="center"
                justifyContent="center"
            >
                {isPending && (
                    <>
                        {[1, 2, 3, 4].map((item) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
                                <SkeletonCard />
                            </Grid>
                        ))}
                    </>
                )}

                {data?.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <CardShow {...item.show} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}

export default Shows
