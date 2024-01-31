export const defaultConfig = {
    content: `import { Hono } from 'hono'
import { poweredBy } from 'https://esm.sh/hono/powered-by'

const app = new Hono()

app.use("*", poweredBy())

app.get('/hello', (c) => {
  const name = c.req.query('name')
  return c.text(\`Hello \${name}!\`)
})

app.get('/jsx', (c) => {
  return c.html(
    <div>
      <h1>Hello JSX!</h1>
    </div>
  )
})

export default app`,
};
