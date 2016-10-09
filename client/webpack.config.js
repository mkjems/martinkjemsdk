module.exports = {
  entry: {
    'frontpage/frontpage': './src/frontpage/frontpage.js',
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
      loader:"style-loader!css-loader"
    }]
  }
}