module.exports = {
  // roots: [
  //   "<rootDir>/src/",
  //   "<rootDir>/tests/"
  // ],
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '/src/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1"
  },
};
