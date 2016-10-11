var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry: {
    'frontpage/frontpage': './src/frontpage/script/frontpage.js',
    'cartrace/cartrace': './src/cartrace/cartrace.js',
    'mastermind/mastermind': './src/mastermind/mastermind.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    },{
      test: /\.svg$/,
      loader: 'babel!svg-react'
    }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src")]
  },
  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
}