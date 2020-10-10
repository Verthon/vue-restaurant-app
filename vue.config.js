const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      // load which style file you want to import globally
      patterns: [path.resolve(__dirname, './src/styles/index.scss')]
    }
  }
}
