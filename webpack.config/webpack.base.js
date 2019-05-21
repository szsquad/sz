const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const projectPath = path.resolve(process.cwd(), './src');
const buildPath = path.resolve(process.cwd(), './build');

module.exports = {
  entry: path.resolve(projectPath, './index.js'),

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
        text: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ]

}