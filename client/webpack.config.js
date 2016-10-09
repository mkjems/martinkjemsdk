module.exports = {
  entry: {
    frontpage: './src/frontpage.js',
    'cartrace/cartrace': './src/cartrace/cartrace.js',
    'mastermind/mastermind': './src/mastermind/mastermind.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  }
}