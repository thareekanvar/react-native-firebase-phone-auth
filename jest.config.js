module.exports = {
    preset: 'jest-expo',
    // Load setup-tests.js before test execution
    setupFilesAfterEnv: ['<rootDir>setup-tests.js'],
    moduleDirectories: ['node_modules', 'src'],
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
    },
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)'
    ],
    coveragePathIgnorePatterns: ['/node_modules/', '/jest']
};
