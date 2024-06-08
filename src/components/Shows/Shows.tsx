import { Grid, Skeleton } from '@mui/material'

function Shows() {
    return (
        <section>
            <Grid container spacing={2}>
                {Array.from(Array(60)).map((_, index) => (
                    <Grid item xs={12} sm={6} lg={4} key={index}>
                        <Skeleton />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}

export default Shows
