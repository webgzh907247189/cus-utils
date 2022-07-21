// Generated by dts-bundle v0.7.3

declare module 'cus-utils' {
    export { default as awaitWrap } from 'cus-utils/awaitWrap';
    export { default as clearTimeId } from 'cus-utils/clearTimeId';
    export { default as compose } from 'cus-utils/compose';
    export { default as curry } from 'cus-utils/curry';
    export { default as getTypeObj } from 'cus-utils/getTypeFn';
    export { getTypeFn, isArray, isObject } from 'cus-utils/getTypeFn';
    export { default as toFixedNumber } from 'cus-utils/toFixedNumber';
    export { default as getLowerCase } from 'cus-utils/lowerCase';
}

declare module 'cus-utils/awaitWrap' {
    export default function awaitWrap<T, U = unknown>(promise: Promise<T>): Promise<[U | null, T | null]>;
}

declare module 'cus-utils/clearTimeId' {
    type ClearTimeIdType = () => {
        clearTimeoutFn: () => void;
        clearSetIntervalFn: () => void;
        setTimeoutIdToList: (id: number) => void;
        setTimersListToNull: () => void;
        timersArr: number[];
    };
    const clearTimeId: ClearTimeIdType;
    export default clearTimeId;
}

declare module 'cus-utils/compose' {
    type Func<T extends any[], R> = (...a: T) => R;
    export default function compose(): <R>(a: R) => R;
    export default function compose<F extends Function>(f: F): F;
    export default function compose<A, T extends any[], R>(f1: (a: A) => R, f2: Func<T, A>): Func<T, R>;
    export default function compose<A, B, T extends any[], R>(f1: (b: B) => R, f2: (a: A) => B, f3: Func<T, A>): Func<T, R>;
    export default function compose<A, B, C, T extends any[], R>(f1: (c: C) => R, f2: (b: B) => C, f3: (a: A) => B, f4: Func<T, A>): Func<T, R>;
    export default function compose<R>(f1: (a: any) => R, ...funcs: Function[]): (...args: any[]) => R;
    export default function compose<R>(...funcs: Function[]): (...args: any[]) => R;
    export {};
}

declare module 'cus-utils/curry' {
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
    const curry: Curry;
    export default curry;
}

declare module 'cus-utils/getTypeFn' {
    import type { UnionType } from 'cus-utils/util.interface';
    type GetTypeFnType = (type: UnionType) => (target: unknown) => boolean;
    export const getTypeFn: GetTypeFnType;
    export const isObject: (target: unknown) => boolean;
    export const isArray: (target: unknown) => boolean;
    const _default: {
        getTypeFn: GetTypeFnType;
        isObject: (target: unknown) => boolean;
        isArray: (target: unknown) => boolean;
    };
    export default _default;
}

declare module 'cus-utils/toFixedNumber' {
    export default function toFixedNumber(val: string | number, num?: number): number;
}

declare module 'cus-utils/lowerCase' {
    export default function getLowerCase(val: string): string;
}

declare module 'cus-utils/util.interface' {
    export type UnionType = 'String' | 'Array' | 'Boolean' | 'Object' | 'Number' | 'Null' | 'Undefined' | 'Symbol' | 'BigInt';
}

