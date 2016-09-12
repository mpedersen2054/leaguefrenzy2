var path = require('path');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { exclude: /node_modules/, loader: 'babel' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
