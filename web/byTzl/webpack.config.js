const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');
const root = __dirname;

module.exports = {
  entry: path.resolve(root, './src/index.js'),
  output: {
    path: path.resolve(root, './build'),
    filename: 'bundle.js',
  }
};
