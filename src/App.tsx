import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@/Pages/Home'

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

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
])

function App() {
    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </ThemeProvider>
        </CssBaseline>
    )
}

export default App
