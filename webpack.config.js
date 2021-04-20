/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    // entry point of our app
    './client/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
        { 
            test: /\.(js)$/, 
            use: 'babel-loader' 
        },
        { 
            test: /\.css$/, 
            use: ['style-loader', 'css-loader'] 
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './client/index.html'
    })
  ]
}