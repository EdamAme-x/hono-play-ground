import { Hono } from "hono";
import { useEffect, useState } from "react";
import initSwc, { transformSync } from "@swc/wasm-web";
import { Panel } from "./panel";
const importSource = `import { jsx, Fragment } from 'https://esm.sh/hono/jsx'\n`;

await initSwc();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Preview({ content }: { content: string }) {
    const [app, setApp] = useState<Hono | null>(null);
    const [buildStatus, setBuildStatus] = useState<"success" | "building" | "error">("building");

    useEffect(() => {
        try {
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
                .catch((_) => {
                    console.log("%c[Build Error] " + Math.floor((end - start) * 100) / 100 + "ms", "color: #cc0000; font-weight: bold;");
                    setBuildStatus("error");
                    console.error(_);
                });
        } catch (_) {
            console.log("%c[Build Error]", "color: #cc0000; font-weight: bold;");
            setBuildStatus("error");
        }
    }, [content]);

    app &&
        console.log(
            "%c[Routes]\n",
            "color: #0000cc; font-weight: bold;",
            "\n" + app!.routes.map((route) => `[${route.method}] ${route.path}`).join("\n")
        );

    return (
        <div className="my-[2.5vh] flex min-h-screen w-full min-w-[400px] flex-col p-2 md:w-1/2">
            {app && <Panel buildStatus={buildStatus} app={app} />}
        </div>
    );
}
