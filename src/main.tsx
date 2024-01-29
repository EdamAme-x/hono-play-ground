import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary, render } from "hono/jsx/dom";
import { ThemeProvider } from "./lib/theme.tsx";
import { Exception } from "./components/exception/index.tsx";

render(
    <>
        <ThemeProvider>
            <ErrorBoundary fallback={<Exception />}>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </>,
    document.getElementById("root")!
);
