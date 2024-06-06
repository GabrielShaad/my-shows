import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Page from '@/components/Page'

import '@fontsource/comfortaa/300.css'
import '@fontsource/comfortaa/400.css'
import '@fontsource/comfortaa/500.css'
import '@fontsource/comfortaa/600.css'
import '@fontsource/comfortaa/700.css'

const theme = createTheme({
    typography: {
        fontFamily: 'Comfortaa',
    },
})

function App() {
    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <Page />
            </ThemeProvider>
        </CssBaseline>
    )
}

export default App
