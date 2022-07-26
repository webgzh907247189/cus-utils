import { parseUrlQuery } from '../src/index';


describe('测试 parseUrlQuery 文件', () => {
    it('测试 parseUrlQuery 传入正常query字符串', () => {
        const data = parseUrlQuery('a=1&b=2&c=3&a=4&a=5');
        expect(data.a).toEqual(['1', '4', '5']);
    });

    it('测试 parseUrlQuery 传入字符串,返回key 带有数组的情况', async () => {
        const data = parseUrlQuery('a=1&b=2&c=3&a=4&a=5');
        expect(data.b).toEqual('2');
    });

    it('测试 parseUrlQuery 传入空字符串', async () => {
        const data = parseUrlQuery('');
        expect(data).toEqual({});
    });

    it('测试 parseUrlQuery 传入带?的字符串', async () => {
        const data = parseUrlQuery('?a=1&b=2&c=3');
        expect(data).toEqual({a: '1', b: '2', c: '3'});
    });
});
