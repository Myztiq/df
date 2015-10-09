var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.jsx",
    html: "./index.html"
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: [__dirname + '/dist'] }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  output: {
    filename: "app.js",
    path: __dirname + "/dist"
  }
};