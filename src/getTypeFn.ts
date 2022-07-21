// 字面量
import type { UnionType } from './util.interface';

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
