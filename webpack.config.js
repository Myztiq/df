var path = require('path');
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
      'images': path.join(__dirname, '/images')
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
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      }
    ]
  },
  output: {
    filename: "main.js",
    path: __dirname + "/dist"
  },
  devServer: {
    historyApiFallback: true
  }
};

if (process.env.NODE_ENV !== 'production') {
  config.entry.unshift("webpack/hot/dev-server");
}
module.exports = config;