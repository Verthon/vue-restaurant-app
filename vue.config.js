module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/styles/custom.scss";
        @import "@/styles/normalize.scss";
        @import "@/styles/reset.scss";
        @import "@/styles/variables.scss";
        @import "@/styles/mixins.scss";
        `
      }
    }
  }
}
