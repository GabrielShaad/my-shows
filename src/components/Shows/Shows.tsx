import { Grid, Typography } from '@mui/material'
import CardShow from '@/components/CardShow'

import SkeletonCard from '../SkeletonCard'
import { ShowsResponse } from '@/types/Shows'

interface ShowsProps {
    isLoading: boolean
    shows?: ShowsResponse[]
}

function Shows({ isLoading, shows }: ShowsProps) {
    return (
        <section>
            <Grid
                container
                padding={2}
                spacing={2}
                alignItems="center"
                justifyContent="center"
            >
                {isLoading && (
                    <>
                        {[1, 2, 3, 4].map((item) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
                                <SkeletonCard />
                            </Grid>
                        ))}
                    </>
                )}

                {shows?.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <CardShow {...item.show} />
                    </Grid>
                ))}

                {!isLoading && !shows?.length && (
                    <Grid item margin={1}>
                        <Typography variant="h3" align="center">
                            Nenhuma série encontrada.
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </section>
    )
}

export default Shows
