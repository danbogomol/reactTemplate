const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/build'),
   filename: 'index.bundle.js'
 },
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     },
     {
       test: /\.(png|jpe?g|gif)$/i,
       use: ['file-loader']
     }
   ]
 },
 resolve: {
  extensions: ['.tsx', '.ts', '.js']
},
 plugins: [
  new webpack.ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
  }),
  new HtmlWebpackPlugin({ template: './src/public/index.html' })],
}
