/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  roots: ["<rootDir>/tests"],
  globals: {
    "ts-jest": {
      useESM: true
    }
  }
};
