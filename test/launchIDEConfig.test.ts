import { launchIDEConfig } from '../src/index';
import { jsStr } from '../src/launchIDEConfig'

describe('测试 launchIDEConfig 文件', () => {

    it('测试 launchIDEConfig 存入 返回值', () => {
        const result = launchIDEConfig();
        expect(result).toEqual(jsStr);
    });   
});
