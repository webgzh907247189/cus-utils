import { lowerCase } from '../src/index';

describe('测试 lowerCase 文件', () => {

    it('测试 lowerCase 返回数组', () => {
        const val = 1
        // @ts-ignore
        const result = lowerCase(val);
        expect(result).toEqual(undefined);
    });

    it('测试 lowerCase 返回reject', async () => {
        const val = 'ABC'
        const result = lowerCase(val);
        expect(result).toEqual('abc');
    });
});
