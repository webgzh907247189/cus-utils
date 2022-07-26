import { getTypeFn, isObject, isArray, getTypeObj } from '../src/index';

describe('测试 getTypeFn 文件', () => {
    it('测试 getTypeFn 检测布尔', () => {
        const isBoolean = getTypeFn('Boolean');
        const result = isBoolean(false);
        expect(result).toBe(true);
    });

    it('测试 isObject 检测对象', () => {
        const result = getTypeObj.isObject({});
        expect(result).toBe(true);
    });

    it('测试 isArray 检测数组', () => {
        const result = isArray([]);
        expect(result).toBe(true);
    });

    it('测试 getTypeFn 检测函数', () => {
        const isFn = getTypeFn('Function');
        const result = isFn(() => {});
        expect(result).toBe(true);
    });
    it('测试 getTypeFn 检测非函数', () => {
        const isFn = getTypeFn('Function');
        const result = isFn('');
        expect(result).toBe(false);
    });
});
