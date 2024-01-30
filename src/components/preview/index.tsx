import { Hono } from "hono";
import { useEffect, useState } from "hono/jsx";
import initSwc, { transformSync } from "@swc/wasm-web";
import { Panel } from "./panel";
const importSource = `import { jsx, Fragment } from 'https://esm.sh/hono/jsx'\n`;

await initSwc();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Preview ({ content }: { content: string }) {
    const [app, setApp] = useState<Hono | null>(null);
    const [buildStatus, setBuildStatus] = useState<"success" | "building" | "error">("building");

    useEffect(() => {
        setBuildStatus("building");
        const start = performance.now();

        const { code } = transformSync(importSource + content, {
            jsc: {
                parser: {
                    syntax: "typescript",
                    tsx: true,
                },
                transform: {
                    react: {
                        pragma: "jsx",
                        pragmaFrag: "Fragment",
                        throwIfNamespace: true,
                        development: false,
                        useBuiltins: false,
                    },
                },
            },
        });

        const end = performance.now();

        const blobURL = URL.createObjectURL(new Blob([code], { type: "text/javascript" }));

        import(/* @vite-ignore */ blobURL)
            .then((module: { default: Hono }) => {
                setApp(module.default);
                console.log("%c[Build] " + Math.floor((end - start) * 100) / 100 + "ms", "color: #00cc00; font-weight: bold;");
                setBuildStatus("success");
            })
            .catch(() => {
                console.log("%c[Build Error] " + Math.floor((end - start) * 100) / 100 + "ms", "color: #cc0000; font-weight: bold;");
                setBuildStatus("error");
            });
    }, [content]);

    app &&
        console.log(
            "%c[Routes]\n",
            "color: #0000cc; font-weight: bold;",
            "\n" + app!.routes.map((route) => `[${route.method}] ${route.path}`).join("\n")
        );

    return (
        <div class="flex min-h-screen w-full items-center justify-center">
            <p>{buildStatus}</p>
            {app && <Panel app={app} />}
        </div>
    );
}