/**
 * import { Hono } from 'hono'
 * to
 * import { Hono } from 'https://esm.sh/hono'
 */

const regex = /from\s*('|")(.*)('|");?/g;

export function parseImport(source: string) {
    const result = source.replace(regex, (_matched, p1, p2, p3) => {
        if (p2.includes("//")) {
            return `from ${p1}${p2}${p3}`;
        }

        return `from ${p1}https://esm.sh/${p2}${p3}`;
    });

    console.log(result);

    return result;
}
