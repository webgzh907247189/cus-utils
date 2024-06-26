import { launchIDEConfig } from '../src/index';
import { jsStr } from '../src/launchIDEConfig'

describe('测试 launchIDEConfig 文件', () => {

    it('测试 launchIDEConfig 存入 返回值 没有参数的情况', () => {
        const result = launchIDEConfig();
        const jsStr1 = `(() => { let options = {}; ${jsStr}; })()`;
        expect(result).toEqual(jsStr1);
    });   

    it('测试 launchIDEConfig 存入 返回值 有一个参数的情况', () => {
        const ideName = 'vscode';
        
        // const userGetUrl = undefined
        const result = launchIDEConfig(ideName);

        const str = `(() => { let ideName = '${ideName}'; let options = { ideName: ideName }; let userGetUrlObj = { undefined }; if (userGetUrlObj.userGetUrl) { options.userGetUrl = userGetUrlObj.userGetUrl; }; ${jsStr}; })()`;
        expect(result).toEqual(str);
    });   

    it('测试 launchIDEConfig 存入 返回值 有两个参数的情况', () => {
        const ideName = 'vscode';
        const userGetUrl = (completeFilepath) => {
            return "vscode://file" + completeFilepath;
        }
        const result = launchIDEConfig(ideName, userGetUrl);

        const str = `(() => { let ideName = '${ideName}'; let options = { ideName: ideName }; let userGetUrlObj = { ${userGetUrl} }; if (userGetUrlObj.userGetUrl) { options.userGetUrl = userGetUrlObj.userGetUrl; }; ${jsStr}; })()`;
        expect(result).toEqual(str);
    });   
});
