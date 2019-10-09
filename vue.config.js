module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  // chainWebpack: config => {
  //   // GraphQL Loader
  //   config.module
  //     .rule('eot|svg|ttf|woff|woff2')
  //     .test( /\.(eot|svg|ttf|woff|woff2)$/)
  //     .use('file-loader')
  //       .loader('file-loader')
  //       .end()
  // }
}
