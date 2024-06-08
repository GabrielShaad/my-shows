import { Grid } from '@mui/material'
import CardShow from '../CardShow'

function Shows() {
    return (
        <section>
            <Grid
                container
                padding={2}
                spacing={2}
                alignItems="center"
                justifyContent="center"
            >
                {Array.from(Array(60)).map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <CardShow />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}

export default Shows
