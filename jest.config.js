const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: '.',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  coverageDirectory: ".coverage",
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }]],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
    './src/components/': {
      branches: 40,
      statements: 40,
    },
    './src/reducers/**/*.js': {
      statements: 90,
    },
    './src/api/very-important-module.js': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/.docker/**',
    '!**/.history/**',
    '!**/.next/**',
    '!**/.storybook/**',
    '!**/.swc/**',
    '!**/.vscode/**',
    '!**/applications/**',
    '!**/public/**',
    '!**/assets/**',
    "!<rootDir>/src/**/_app.tsx",
    "!**/config/**",
    "!**/interfaces/**"
  ],
  clearMocks: true,
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  moduleNameMapper: {
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
    '@services/(.*)$': '<rootDir>/src/services/$1',
    "@config/(.*)$": "<rootDir>/src/config/$1",
    "@styles/(.*)$": "<rootDir>/src/styles/$1",
    "@contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "@constants/(.*)$": "<rootDir>/src/constants/$1",
    "@utils/(.*)$": "<rootDir>/src/utils/$1",
    "@enums/(.*)$": "<rootDir>/src/enums/$1",
    "@dtos/(.*)$": "<rootDir>/src/dtos/$1",
    "@schemas/(.*)$": "<rootDir>/src/schemas/$1"
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ["**/*.unit.test.ts", "**/*.unit.test.tsx"],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/.docker/', '<rootDir>/.history/', '<rootDir>/.storybook/', '<rootDir>/.swc/', '<rootDir>/.vscode/', '<rootDir>/applications/', '<rootDir>/public/']
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
