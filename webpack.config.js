const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './browser/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    hot: true
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: /browser/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-3']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
