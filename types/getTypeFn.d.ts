declare type UnionType = 'String' | 'Array' | 'Boolean' | 'Object' | 'Number' | 'Null' | 'Undefined' | 'Symbol' | 'BigInt';
declare type GetTypeFnType = (type: UnionType) => (target: unknown) => boolean;
export declare const getTypeFn: GetTypeFnType;
declare const _default: {
    getTypeFn: GetTypeFnType;
    isObject: (target: unknown) => boolean;
    isArray: (target: unknown) => boolean;
};
export default _default;
