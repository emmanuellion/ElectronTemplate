const {resolve} = require("path");
module.exports = {
  target: 'electron-main',
  entry: './index.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  // Put your normal webpack config below here
  mode: 'development',
  module: {
    rules: require('./webpack.rules'),
  },
};
