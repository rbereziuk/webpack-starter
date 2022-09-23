const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter',
      template: './src/template.html',
      filename: 'index.html',
      favicon: './src/favicon.ico',
    }),
  ],

  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  }
}
