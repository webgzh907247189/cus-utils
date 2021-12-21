import { awaitWrap } from '../src/index';

describe('测试 awaitWrap 文件', () => {
    it('测试 awaitWrap 返回数组', async () => {
        const list = [1, 2, 3];
        let promise = Promise.resolve(list);
        const [err, data] = await awaitWrap(promise);
        expect(data).toEqual(list);
    });

    it('测试 awaitWrap 返回reject', async () => {
        const list = [1, 2, 3];
        let promise = Promise.reject(list);
        const [err] = await awaitWrap(promise);
        expect(err).toEqual(list);
    });
});
