export default function getLocalStorage<T>(key: string, init: T): T {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : init;
    } catch (e) {
        return init;
    }
}
