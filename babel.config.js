module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
            },
        ],
    ],
    env: {
        // core -> config-chain.js -> dedupDescriptors
        test: {
            presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
        },
    },
};
