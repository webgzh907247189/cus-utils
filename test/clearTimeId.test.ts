import { clearTimeId } from '../src/index';

describe('测试 clearTimeId 文件', () => {
    const { clearSetIntervalFn, setTimeoutIdToList, clearTimeoutFn, timersArr, setTimersListToNull } = clearTimeId();

    it('测试 setTimeoutIdToList 存入 id', () => {
        let id = window.setTimeout(() => {}, 0);
        setTimeoutIdToList(id);
        const result = timersArr.length;
        expect(result).toBe(1);
    });

    it('测试 clearSetIntervalFn', () => {
        clearSetIntervalFn();
        const result = timersArr.length;
        expect(result).toBe(1);
    });

    it('测试 clearTimeoutFn', () => {
        clearTimeoutFn();
        const result = timersArr.length;
        expect(result).toBe(1);
    });

    it('测试 清空 timersArr setTimersListToNull', (done) => {
        setTimersListToNull();
        new Promise((resolve) => {
            setTimeout(() => {
                resolve({ name: 'promise' });
            }, 200);
        }).then(() => {
            const result = timersArr?.length;
            expect(result).toBe(0);
            done();
        });
    });
});
