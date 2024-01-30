import { Hono } from "hono";

export function Panel({ app }: { app: Hono }) {
    return <>{app.toString()}</>;
}
