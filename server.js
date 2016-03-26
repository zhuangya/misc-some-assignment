'use strict';

const path = require('path');

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, 'app'),
  hot: true,
  historyApiFallback: false,
  quiet: false,
  noInfo: false,
  filename: 'bundle.js',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  publicPath: '/assets/',
  stats: {
    colors: true
  }
});

server.listen(8090, 'localhost')
