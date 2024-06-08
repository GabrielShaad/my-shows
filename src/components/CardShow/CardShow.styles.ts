import { Typography, styled } from '@mui/material'

const Description = styled(Typography)({
    maxHeight: '100px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
})

export { Description }
