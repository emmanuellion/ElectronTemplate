const rules = require('./webpack.rules');
const {resolve} = require("path");

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  target: 'electron-main',
  entry: './index.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
