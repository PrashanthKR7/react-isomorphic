const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  devtool: "eval-source-map",
  entry: ["./browser.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [new CleanWebpackPlugin(["public"])],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
