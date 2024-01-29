export const defaultConfig = {
    content: `import { Hono } from 'https://esm.sh/hono'

const app = new Hono()

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
