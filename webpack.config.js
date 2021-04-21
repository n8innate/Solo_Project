/* eslint-disable no-undef */
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
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
    contentBase: './dist',
    publicPath: '/dist',
    proxy: {
      '/hey': 'http://localhost:3001/',
    },
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/preset-react']
            }
          },
        },
        {
          test: /.(css|scss)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            // loads files as base64 encoded data url if image file is less than set limit
            loader: 'url-loader',
            options: {
              // if file is greater than the limit (bytes), file-loader is used as fallback
              limit: 8192,
            },
          },
        ],
        }
      ]
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
}