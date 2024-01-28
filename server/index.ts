import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'
import { serve } from "@hono/node-server"
import { serveStatic } from "@hono/node-server/serve-static"
import { readFile } from "node:fs/promises"
import viteConfig from "../vite.config"

const isProduction = process.env["NODE_ENV"] === "production"
let html = await readFile(isProduction ? "build/index.html" : "index.html", "utf8")

if (!isProduction) {
    html = html.replace("<head>", `<head><script type="module">import RefreshRuntime from "/@react-refresh";RefreshRuntime.injectIntoGlobalHook(window);window.$RefreshReg$ = () => {};window.$RefreshSig$ = () => (type) => type;window.__vite_plugin_react_preamble_installed__ = true;</script><script type="module" src="/@vite/client"></script>`)
}

const app = new Hono()

app.use("*", poweredBy())

app.get('/hello', (c) => {
  return c.text('Hello Hono!!')
})

app.use("/assets/*", serveStatic({ root: isProduction ? "build/" : "./" })).get("/*", c => c.html(html))

export default app

if (isProduction) {
    serve({ ...app, port: viteConfig.server?.port }, info => {
        console.log(`Listening on http://localhost:${info.port}`);
    });
}