/* eslint-disable */
export default {
  displayName: "dashboard",
  preset: "../../jest.preset.js",
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
  coverageDirectory: "../../coverage/apps/dashboard",
  globals: {
    // Problem -> https://github.com/vercel/next.js/discussions/19155
    // Solution -> https://github.com/kulshekhar/ts-jest/issues/2805
    "ts-jest": {
      tsconfig: {
        jsx: "react-jsx",
      },
    },
  },
};
