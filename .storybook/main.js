module.exports = {
  stories: [],
  addons: ["@storybook/addon-essentials"],
  typescript: {
    reactDocgen: "none",
  },
  // uncomment the property below if you want to apply some webpack config globally
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("ts-loader"),
      options: {
        transpileOnly: true,
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
