import { compose } from '../src/index';

describe('测试 clearTimeId 文件', () => {
    it('测试 compose 组合三个函数', () => {
        let a = (x: string) => `a${x}`;
        let b = (x: string) => `b${x}`;
        let c = (x: string) => `c${x}`;

        let composeFn = compose(a, b, c);
        const result = composeFn('');
        expect(result).toBe('abc');
    });

    it('测试 compose 组合两个函数', () => {
        let a = (x: string) => `a${x}`;
        let b = (x: string) => `b${x}`;

        let composeFn = compose(a, b);
        const result = composeFn('');
        expect(result).toBe('ab');
    });

    it('测试 compose 组合一个函数', () => {
        let a = (x: string) => `a${x}`;
        let composeFn = compose(a);
        const result = composeFn('');
        expect(result).toBe('a');
    });
});
