import { launchIDEConfig } from '../src/index';
import { jsStr } from '../src/launchIDEConfig'

describe('测试 launchIDEConfig 文件', () => {

    it('测试 launchIDEConfig 存入 返回值 没有参数的情况', () => {
        const result = launchIDEConfig();
        expect(result).toEqual(jsStr);
    });   

    it('测试 launchIDEConfig 存入 返回值 有参数的情况', () => {
        const ideName = 'vscode';
        const result = launchIDEConfig(ideName);
        const str = `(() => {
            let ideName = '${ideName}';
            let options = { ideName: ideName };
            ${jsStr};
        })()`;
        expect(result).toEqual(str);
    });   
});
