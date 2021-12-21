import { toFixedNumber } from '../src/index';

describe('测试 toFixedNumber 文件', () => {
    it('测试 toFixedNumber 返回值', () => {
        const result = toFixedNumber(0.1 + 0.6789, 5);
        expect(result).toBe(0.7789);
    });

    it('测试 toFixedNumber 五入', () => {
        // 1.335.toFixed(2) ->  '1.33'
        const result = toFixedNumber(1.335);
        expect(result).toBe(1.34);
    });

    it('测试 toFixedNumber 四舍', () => {
        // 1.334.toFixed(2) ->  '1.33'
        const result = toFixedNumber(1.334);
        expect(result).toBe(1.33);
    });
});
