var path = require('path')

module.exports = {
  entry: 'app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['js', 'jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
