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
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: [['react'],
         ['env', {
           targets: { browsers:['chrome 57'] },
           modules:false
         }]
      ]},
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}
