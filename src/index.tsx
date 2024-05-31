import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import "./shared/config/i18n/i18n";
import ErrorBoundary from "app/providers/ErrorBoundary/ErrorBoundary";
import { createRoot } from 'react-dom/client';
import 'app/styles/index.scss'


const container = document.getElementById('root');
if (!container) {
	throw new Error('Container root is non find')
}

const root = createRoot(container);
root.render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>
);
