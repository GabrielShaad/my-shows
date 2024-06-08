import { Container } from '@mui/material'
import Header from '@/components/Header'

import { ReactNode } from 'react'
import { Wrapper } from './Page.styles'

interface PageProps {
    children: ReactNode
}

function Page({ children }: PageProps) {
    return (
        <Wrapper>
            <Header />
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'space-around',
                    padding: '80px 0',
                    gap: '1rem',
                }}
            >
                {children}
            </Container>
        </Wrapper>
    )
}

export default Page
