interface Curry1<T1, R> {
    (): Curry1<T1, R>;
    (t1: T1): R;
}

interface Curry2<T1, T2, R> {
    (): Curry2<T1, T2, R>;
    (t1: T1): Curry1<T2, R>;
    (t1: T1, t2: T2): R;
}

interface Curry3<T1, T2, T3, R> {
    (): Curry3<T1, T2, T3, R>;
    (t1: T1): Curry2<T2, T3, R>;
    (t1: T1, t2: T2): Curry1<T3, R>;
    (t1: T1, t2: T2, t3: T3): R;
}

interface Curry {
    <T1, R>(fn: (t1: T1) => R): Curry1<T1, R>;
    <T1, T2, R>(fn: (t1: T1, t2: T2) => R): Curry2<T1, T2, R>;
    <T1, T2, T3, R>(fn: (t1: T1, t2: T2, t3: T3) => R): Curry3<T1, T2, T3, R>;
}
const curry: Curry = (fn: any, ...args: any) => {
    if (args.length >= fn.length) {
        return fn(...args);
    }

    // @ts-ignore
    return (...runArgs: any) => curry(fn, ...args, ...runArgs);
};

export default curry;
