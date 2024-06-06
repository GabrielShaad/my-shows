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
            <Container maxWidth="lg" sx={{ paddingTop: '80px' }}>
                {children}
            </Container>
        </Wrapper>
    )
}

export default Page
