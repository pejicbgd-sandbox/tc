const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const COMPONENTS_PATH = path.join(__dirname, 'src', 'components');
const HELPERS_PATH = path.join(__dirname, 'src', 'helpers');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'public_html', 'assets', 'js'),
    filename: 'app.js'
  },
  resolve: {
    alias: {
      components: COMPONENTS_PATH,
      helpers: HELPERS_PATH
    },
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        exclude : /node_modules/,
        loader : "babel-loader",
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader') 
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/style.css', {
        allChunks: true
    })
  ]
}