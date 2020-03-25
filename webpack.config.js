const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    // for router works, this flag should be true!
    historyApiFallback: true
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      },
      // Enable this loaders to use css loader and style-loader
      {
        test: /\.css$/,
        loader: "style-loader"
      },
      {
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          modules: {
            mode: "local",
            localIdentName: "[name]__[local]__[hash:base64:5]"
          }
        }
      }
    ]
  }
};
