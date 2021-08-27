const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/dist/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(.js|.jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
