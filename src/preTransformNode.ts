import makeMap from './makeMap';
// 编译.vue 拿到 ast
type TypePreTransformNode = (ast: { tag: string; attrsList?: { name: string; value: any }[] }, b: { filename: string }) => any;
const preTransformNode: TypePreTransformNode = (ast, { filename }) => {
    const currentPath = filename; // path.relative(__dirname, filename);

    const itemTag = ast.tag;
    if (!makeMap[itemTag]) {
        (ast.attrsList ?? []).push({
            name: 'component-name',
            value: itemTag,
        });
    }
    (ast.attrsList ?? []).push({
        name: 'complete-filepath',
        value: currentPath,
    });

    // 动态组件
    if (itemTag === 'component') {
        (ast.attrsList ?? []).push({
            name: 'data-dynamic-component',
            value: true,
        });
    }

    return ast;
};
// 这里可以配置 vue-template-compiler 的选项，而不是 babel-loader 的 transpileOptions
// 注意：直接在这里配置 Babel 的 transpileOptions 可能不会生效

export default [{ preTransformNode }];
