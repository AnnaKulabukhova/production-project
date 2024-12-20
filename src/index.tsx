import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import './shared/config/i18n/i18n';
import ErrorBoundary from '@/app/providers/ErrorBoundary/ErrorBoundary';
import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ForceUpdateProvider } from './shared/lib/render/forceUpdate';
import { VirtuosoProvider } from './app/providers/VirtuosoProvider/VirtuosoProvider';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Container root is non find');
}

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ForceUpdateProvider>
          <ThemeProvider>
            <VirtuosoProvider>
              <App />
            </VirtuosoProvider>
          </ThemeProvider>
        </ForceUpdateProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
