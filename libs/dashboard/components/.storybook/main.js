const rootMain = require("../../../../.storybook/main");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: "webpack5" },
  framework: "@storybook/react",
  stories: [
    ...rootMain.stories,
    "../src/lib/**/*.stories.mdx",
    "../src/lib/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    ...rootMain.addons,
    "@nrwl/react/plugins/storybook",
    "storybook-addon-next-router",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("ts-loader"),
      options: {
        transpileOnly: true,
      },
    });
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      })
    );
    config.resolve.extensions.push(".ts", ".tsx");

    // add your own webpack tweaks if needed

    return config;
  },
};
