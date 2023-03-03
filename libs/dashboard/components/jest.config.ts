/* eslint-disable */
export default {
  displayName: "components",
  testTimeout: 70000,
  preset: "../../../jest.preset.js",
  moduleNameMapper: {
    "\\.(css|less).*$": "identity-obj-proxy",
  },
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.spec.json",
        isolatedModules: true,
      },
    ],
  },
  setupFiles: ["jest-canvas-mock"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../coverage/libs/dashboard/components",
  coverageReporters: ["lcov", "text-summary"],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 46,
      functions: 48,
      lines: 69,
    },
  },
};
