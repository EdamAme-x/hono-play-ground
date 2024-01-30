import App from "./App.tsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "./lib/theme.tsx";
import { Exception } from "./components/exception/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <ThemeProvider>
            <ErrorBoundary fallback={<Exception />}>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </>
);
