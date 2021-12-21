// 字面量
type UnionType = 'String' | 'Array' | 'Boolean' | 'Object' | 'Number' | 'Null' | 'Undefined' | 'Symbol' | 'BigInt';

type GetTypeFnType = (type: UnionType) => (target: unknown) => boolean;

export const getTypeFn: GetTypeFnType = (type) => {
    return (target) => {
        return Object.prototype.toString.call(target) === `[object ${type}]`;
    };
};

const isObject = getTypeFn('Object');
const isArray = getTypeFn('Array');

export default {
    getTypeFn,
    isObject,
    isArray,
};
