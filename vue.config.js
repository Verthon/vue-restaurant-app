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
        prependData: '@import "@/styles/index.scss";'
      }
    }
  }
}
