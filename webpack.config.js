'use strict';

const webpack = require('webpack');
const path = require('path');

let port = 8000;
module.exports = {
  context: path.join(__dirname, './app'),
  port: port,
  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    './entry'
  ],
  output: {
    path: path.resolve(__dirname, 'app'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.(png|jpg|gif|woff|woff2)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    port: port,
    contentBase: path.join(__dirname, './app'),
  }
};
