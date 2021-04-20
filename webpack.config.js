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
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    proxy: {
      '/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  devtool: 'eval-source-map',
  mode: 'development',
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
  plugins: [
    new HtmlWebpackPlugin({
        template: './client/index.html'
    })
  ],
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
}