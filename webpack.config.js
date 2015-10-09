module.exports = {
  context: __dirname + "/app",
  entry: [
    "webpack/hot/dev-server",
    "./main.jsx",
    "./index.html"
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
    filename: "main.js",
    path: __dirname + "/dist"
  },
  devServer: {
    historyApiFallback: true
  }
};