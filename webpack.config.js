 var config = {
  context: __dirname + "/app",
  entry: [
    "./main.jsx",
    "./index.html"
  ],
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