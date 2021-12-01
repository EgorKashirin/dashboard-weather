const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

const Dotenv = require("dotenv-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, paths.build),
    },
    open: false,
    compress: true,
    hot: true,
    port: 3000,
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },

  plugins: [
    new Dotenv({
      systemvars: true,
    }),
    new CaseSensitivePathsPlugin(),
    new webpack.ProgressPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "build" }],
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: "САПЭР",
      template: path.resolve("public/index.html"),
      filename: "index.html",
      hash: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});
