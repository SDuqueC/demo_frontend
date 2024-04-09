import {useScrollToTop} from '../src/hooks/use-scroll-to-top';
import Router from './sections/routes';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import ThemeProvider from './theme';
import ScrollToTop from './components/scroll-to-top';

// ----------------------------------------------------------------------

export default function App() {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <ScrollToTop />
                    <Router />
            </ThemeProvider>
        </HelmetProvider>
    );
}

// ----------------------------------------------------------------------