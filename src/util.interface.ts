export type UnionType = 'String' | 'Array' | 'Boolean' | 'Object' | 'Number' | 'Null' | 'Undefined' | 'Symbol' | 'BigInt' | 'Function';

export type TypeParseUrlQueryItem<S> = S extends `${infer L}=${infer R}` ? { [K in L]: R } : Record<string, any>;

export type TypeCombine<T, P> = T extends P ? P : T extends unknown[] ? [...T, P] : [T, P];

export type TypeMerge<T extends Record<string, any>, P extends Record<string, any>> = {
    [K in keyof T | keyof P]: K extends keyof T ? (K extends keyof P ? TypeCombine<T[K], P[K]> : T[K]) : K extends keyof P ? P[K] : never;
};

export type TypeParseUrlQuery<S extends string> = S extends `${infer L}&${infer R}` ? TypeMerge<TypeParseUrlQueryItem<L>, TypeParseUrlQuery<R>> : TypeParseUrlQueryItem<S>;
