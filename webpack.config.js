module.exports = {
  context: __dirname + "/app",
  entry: [
    "webpack/hot/dev-server",
    "./app.jsx",
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
    filename: "app.js",
    path: __dirname + "/dist"
  }
};