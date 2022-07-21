// 字面量
import type { UnionType } from './util.interface';

type GetTypeFnType = (type: UnionType) => (target: unknown) => boolean;

export const getTypeFn: GetTypeFnType = (type) => {
    return (target) => {
        return Object.prototype.toString.call(target) === `[object ${type}]`;
    };
};

export const isObject = getTypeFn('Object');
export const isArray = getTypeFn('Array');

export default {
    getTypeFn,
    isObject,
    isArray,
};
