import { Typography, styled } from '@mui/material'
import LiveTvIcon from '@mui/icons-material/LiveTv'

const Wrapper = styled('header')({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: '1px solid gray',
    backgroundColor: 'rgba(255, 255, 255, 0.8);',
    backdropFilter: 'blur(8px)',

    '& svg': {
        fontSize: '2rem',
        marginRight: '1rem',
    },
})

function Header() {
    return (
        <Wrapper>
            <LiveTvIcon />
            <Typography component="h1" variant="h5" fontWeight="700">
                My TV Shows
            </Typography>
        </Wrapper>
    )
}

export default Header
