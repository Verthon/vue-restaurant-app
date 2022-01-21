const path = require("path");

const root = path.resolve(__dirname, "../src");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias["@"] = root;

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', {
        loader: "sass-loader",
        options: {
          sourceMap: false,
          additionalData: `@import "@/styles/index.scss";`,
        },
      }],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
}