
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  optimization: {
    minimize: false,
    splitChunks: {
      minSize: 0
    }
  },

  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],

 
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000,
  },

};