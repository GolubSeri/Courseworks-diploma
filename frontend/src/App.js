import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './assets/styles/nullstyles.css';

function App() {
    const theme = createTheme({
        typography: {
            allVariants: {
                fontFamily: 'Inter',
            },
        },
    });

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <AppRouter></AppRouter>
                </ThemeProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
