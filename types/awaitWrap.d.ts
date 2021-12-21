export default function awaitWrap<T, U = unknown>(promise: Promise<T>): Promise<[U | null, T | null]>;
