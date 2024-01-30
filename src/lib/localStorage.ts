export class LS {
    static get(key: string) {
        return localStorage.getItem(key);
    }

    static set(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    static remove(key: string) {
        localStorage.removeItem(key);
    }

    static clear() {
        localStorage.clear();
    }

    static getAll() {
        return localStorage;
    }

    static has(key: string) {
        return Object.prototype.hasOwnProperty.call(localStorage, key);
    }

    static keys() {
        return Object.keys(localStorage);
    }
}
