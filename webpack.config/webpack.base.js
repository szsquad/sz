const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');

const projectPath = process.cwd();
const srcPath = path.resolve(projectPath, './src');
const buildPath = path.resolve(projectPath, './build');

module.exports = {
  mode: 'development',
  devtool: "cheap-module-eval-source-map",
  target: "electron-renderer",
  entry: [
    `webpack-dev-server/client?http://localhost:8080/`,
    'webpack/hot/only-dev-server',
    path.resolve(srcPath, './index.js')],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: buildPath,
  },

  resolve: {
    alias: {
      '@': projectPath,
    },
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'happypack/loader',
      }
    ]
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: path.resolve(projectPath, './index.html')
    }),

    new HappyPack({
      loaders: ['babel-loader']
    }),

    new webpack.HotModuleReplacementPlugin()
  ]

}