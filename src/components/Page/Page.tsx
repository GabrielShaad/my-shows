import { Container, Typography, styled } from '@mui/material'
import Header from '@/components/Header'

const Wrapper = styled('main')({
    position: 'relative',
    width: '100vw',
    height: '100svh',
})

function Page() {
    return (
        <Wrapper>
            <Header />
            <Container maxWidth="lg" sx={{ paddingTop: '80px' }}>
                <Typography>Nossa página</Typography>
            </Container>
        </Wrapper>
    )
}

export default Page
