module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Assegura't que 'src' és la carpeta correcta
    },
    testEnvironment: 'jsdom'  // Assegura't que aquest valor estigui present
};
