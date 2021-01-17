const path = require('path')

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    // filename: '[name]@[chunkhash].js',
    filename: '[name].js'
    // path: path.join(__dirname, 'dist') // webpack4 默认输出目录为dist
  },
  mode: 'development',
  devServer: {
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  }
}
