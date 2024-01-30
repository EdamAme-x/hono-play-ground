import { memo, useEffect, useState } from "hono/jsx";
import initSwc, { transformSync } from "@swc/wasm-web";
const importSource = `import { jsx, Fragment } from 'https://esm.sh/hono/jsx'\n`;

await initSwc();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Preview = memo(({ content, setContent }: { content: string; setContent: (content: string) => void }) => {
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

    const blobURL = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }))

    const [app, setApp] = useState(null)

    useEffect(() => {
        import(/* @vite-ignore */ blobURL)
            .then((app) => {
                setApp(app.default)
                console.log("Builded")
                console.log(app)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [app, blobURL])

    return <div class="flex min-h-screen w-full items-center justify-center">{content}</div>;
});
