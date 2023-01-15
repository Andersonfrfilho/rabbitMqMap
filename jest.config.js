const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: '.',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
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
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/.docker/', '<rootDir>/.history/', '<rootDir>/.storybook/', '<rootDir>/.swc/', '<rootDir>/.vscode/', '<rootDir>/applications/', '<rootDir>/public/', '<rootDir>/**/mocks']
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
