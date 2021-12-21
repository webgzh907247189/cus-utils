export default function awaitWrap<T, U = any>(promise: Promise<T>): Promise<[U | null, T | null]>;
