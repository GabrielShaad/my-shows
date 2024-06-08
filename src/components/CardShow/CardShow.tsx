import { StarRounded } from '@mui/icons-material'
import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import { Description } from './CardShow.styles'

function CardShow() {
    return (
        <Card elevation={5}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Show Image"
                    image="https://static.tvmaze.com/uploads/images/medium_portrait/517/1293999.jpg"
                />

                <CardContent>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <Typography
                            fontSize="1.5rem"
                            component="h3"
                            fontWeight="bold"
                        >
                            The Boys
                        </Typography>

                        <Description variant="body2">
                            In a world where superheroes embrace the darker side
                            of their massive celebrity and fame,
                            \u003Cb\u003EThe Boys\u003C/b\u003E centres on a
                            group of vigilantes known informally as \"The
                            Boys,\" who set out to take down corrupt superheroes
                            with no more than blue collar grit and a willingness
                            to fight dirty.
                        </Description>
                    </Box>
                </CardContent>
                <CardActions>
                    <StarRounded />
                    <Typography variant="h6" component="p" fontWeight="bold">
                        8.7
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default CardShow
