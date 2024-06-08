import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Page from '@/components/Page'

import '@fontsource/comfortaa/300.css'
import '@fontsource/comfortaa/400.css'
import '@fontsource/comfortaa/500.css'
import '@fontsource/comfortaa/600.css'
import '@fontsource/comfortaa/700.css'
import Search from './components/Search'
import Shows from './components/Shows'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const theme = createTheme({
    typography: {
        fontFamily: 'Comfortaa',
    },
})

const queryClient = new QueryClient()

function App() {
    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <Page>
                        <Search />
                        <Shows search="boys" />
                    </Page>
                </QueryClientProvider>
            </ThemeProvider>
        </CssBaseline>
    )
}

export default App
