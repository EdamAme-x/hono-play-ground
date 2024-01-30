export function normalizationPayh(path: string): string {
    if (path.startsWith("//")) {
        return normalizationPayh(path.slice(1));
    } else if (path.startsWith("/")) {
        return path;
    } else {
        return `/${path}`;
    }
}
