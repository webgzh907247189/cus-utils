module.exports = {
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['ts', 'js', 'jsx', 'tsx', 'json', 'node'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '\\.[jt]s': 'babel-jest',
    },
    verbose: true,
    coveragePathIgnorePatterns: ['<rootDir>/src/index.ts'],
    testResultsProcessor: './coverageUtil/testResultsProcessor.js',
};
