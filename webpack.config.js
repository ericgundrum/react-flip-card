var path = require('path')

module.exports = {
  devServer: {
    noInfo: true,
    overlay: true,
    compress: false,
    port: 9000
  },
  devtool: 'source-map',
  entry: './index.js',
  output: {
    filename: 'webpack_chunk.js',
    path: path.resolve(__dirname, 'dist')
  }
}
