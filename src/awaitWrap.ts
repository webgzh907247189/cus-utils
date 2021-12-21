export default function awaitWrap<T, U = unknown>(promise: Promise<T>): Promise<[U | null, T | null]> {
    return promise.then<[null, T]>((data) => [null, data]).catch<[U, null]>((err) => [err, null]);
}
