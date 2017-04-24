var path = require('path')
var combineLoaders = require('webpack-combine-loaders')

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
    function() {
      this.plugin('watch-run', function(watching, callback) {
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
        presets: [['react'],
         ['env', {
           targets: { browsers:['chrome 57'] },
           modules:false
         }]
      ]},
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
