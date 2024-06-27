import makeMap from './makeMap';
// 编译.vue 拿到 ast
const getPreTransformNode = (options: { isShowRelativerPath?: boolean; projectRootPath?: string } = {}) => {
    return [
        {
            preTransformNode: function preTransformNode(ast: { tag: string; attrsList?: { name: string; value: any }[] }, b: { filename: string }) {
                const currentPath = b.filename;

                if (options.isShowRelativerPath && options.projectRootPath) {
                    let [, relativePath] = currentPath.split(options.projectRootPath); //path.relative(__dirname, currentPath);

                    relativePath = relativePath.slice(1);
                    ast.attrsList?.push({
                        name: 'relativerPath',
                        value: relativePath,
                    });
                }

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
            },
            // 这里可以配置 vue-template-compiler 的选项，而不是 babel-loader 的 transpileOptions
            // 注意：直接在这里配置 Babel 的 transpileOptions 可能不会生效
        },
    ];
};

export default getPreTransformNode;
