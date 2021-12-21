import { curry } from '../src/index';

describe('测试 curry 文件', () => {
    it('测试 curry 函数', () => {
        let fn = (a: string, b: string, c: string) => `${a}${b}${c}`;
        // @ts-ignore
        let curryFn = curry(fn, 'a');
        // @ts-ignore
        const result = curryFn('b', 'c');
        expect(result).toBe('abc');
    });

    it('测试 curry 函数', () => {
        let fn = (a: string) => `${a}`;

        let curryFn = curry(fn);
        const result = curryFn('a');
        expect(result).toBe('a');
    });
});
