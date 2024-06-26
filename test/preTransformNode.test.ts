import { preTransformNodeList, makeMap } from '../src/index';

describe('测试 preTransformNode 文件', () => {

    it('测试 preTransformNode 能够匹配到 makeMap 的情况', () => {
        const [{ preTransformNode }] = preTransformNodeList
        const tag = 'div'
        const ast: { tag: string; attrsList: { name: string; value: any }[] } = {tag, attrsList: []}
        const filename = 'xxx'
        const result = preTransformNode(ast, { filename });

        ast.attrsList.push({
            name: 'component-name',
            value: tag,
        })
        ast.attrsList.push({
            name: 'complete-filepath',
            value: 'xxx',
        })

        expect(result).toEqual(ast);
    }); 
    
    it('测试 preTransformNode 不能够匹配到 makeMap 的情况', () => {
        const [{ preTransformNode }] = preTransformNodeList
        const tag = 'test11'
        const ast: { tag: string; attrsList: { name: string; value: any }[] } = {tag, attrsList: []}
        const filename = 'xxx'
        const result = preTransformNode(ast, { filename });

        ast.attrsList.push({
            name: 'component-name',
            value: 'test1'
        })

        ast.attrsList.push({
            name: 'data-dynamic-component',
            value: true,
        });

        expect(result).toEqual(ast);
    }); 

    it('测试 preTransformNode 是 component 的情况', () => {
        const [{ preTransformNode }] = preTransformNodeList
        const tag = 'component'
        const ast: { tag: string; attrsList?: { name: string; value: any }[] } = { tag }
        const filename = 'xxx'
        const result = preTransformNode(ast, { filename });

        // ast.attrsList.push({
        //     name: 'data-dynamic-component',
        //     value: true,
        // });

        expect(result).toEqual(ast);
    }); 
});
