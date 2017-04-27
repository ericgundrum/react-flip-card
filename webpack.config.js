const path = require('path')
const combineLoaders = require('webpack-combine-loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { NoEmitOnErrorsPlugin } = require('webpack')

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
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      'template': './index.html',
      'hash': false,
      'inject': 'body',
      'xhtml': true,
      'favicon': false,
      'compile': true,
      'minify': false,
      'cache': true,
      'showErrors': true,
      'chunks': 'all',
      'excludeChunks': []
    }),
    function () {
      this.plugin('watch-run', function (watching, callback) {
        console.log('--> begin compile at ' + new Date().toLocaleTimeString())
        callback()
      })
    }
  ],
  module: {
    rules: [
      { test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react',
            ['env', {
              targets: { browsers: ['chrome 57'] },
              modules: false
            }]
          ]
        },
        exclude: /node_modules/,
        include: __dirname
      },
      { test: /\.css$/,
        loader: combineLoaders([
          { loader: 'style-loader'
          },
          { loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      }]
  }
}
