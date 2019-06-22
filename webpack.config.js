const path = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

dotenv.config();

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: path.join(__dirname, "src", "app.js"),
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/",
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "src")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "app.css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {
        from: "./*.html",
        to: path.join(__dirname, "public"),
        context: "src"
      }
    ])
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
  }
};
