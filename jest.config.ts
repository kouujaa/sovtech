module.exports = {
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/graphql/**/*.ts",
    "!src/rest/**/*.ts",
    "!helpers/**/*.ts",
  ],

  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40,
    },
  },
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "\\.(gql|graphql)$": "jest-transform-graphql",
    ".*": "babel-jest",
  },
  preset: "ts-jest",
  testEnvironment: "node",
};
