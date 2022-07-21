import { getLowerCase } from '../src/index';

describe('测试 getLowerCase 文件', () => {

    it('测试 getLowerCase 返回', () => {
        const val = 1
        // @ts-ignore
        const result = getLowerCase(val);
        expect(result).toEqual(undefined);
    });

    it('测试 getLowerCase 返回', async () => {
        const val = 'ABC'
        const result = getLowerCase(val);
        expect(result).toEqual('abc');
    });
});
