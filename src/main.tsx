import App from "./App.tsx";
import "./index.css";
import { render } from "hono/jsx/dom";
import { ThemeProvider } from "./lib/theme.tsx";

render(
    <>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </>,
    document.getElementById("root")!
);
