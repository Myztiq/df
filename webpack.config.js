var path = require('path');
var webpack = require('webpack');

var config = {
  context: __dirname + '/app',
  entry: [
    "./main.jsx",
    "./index.html"
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["node_modules", "bower_components"],
    alias: {
      'components': path.join(__dirname, '/app/components'),
      'services': path.join(__dirname, '/app/services'),
      'css': path.join(__dirname, '/css'),
      'images': path.join(__dirname, '/images'),
      'config': path.join(__dirname, '/config/production.js')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(scss|css)$/,
        loaders: ["style", "css", "sass", "autoprefixer"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  output: {
    filename: "main.js",
    path: __dirname + "/dist",
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  }
};

if (process.env.NODE_ENV !== 'production') {
  config.entry.unshift("webpack/hot/dev-server");
  config.resolve.alias.config = path.join(__dirname, '/config/development.js');
}
module.exports = config;