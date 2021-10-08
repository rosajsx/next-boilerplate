module.exports = {
  stories: [
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/**/*.stories.mdx",

  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)

    return config
  }
};