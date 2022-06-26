const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      // fix "process is not defined" error:
      // (do "npm install process" before running the build)
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
    resolve: {
      fallback: {
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        os: require.resolve("os-browserify/browser"),
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
      },
    },
  },
  transpileDependencies: [
    'vuetify'
  ]
})
