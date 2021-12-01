const paths = require("./paths");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  target: "web",
  devtool: "nosources-source-map",
  bail: true,
  entry: {
    app: ["react-hot-loader/patch", "./src/index"],
  },
  output: {
    path: paths.build,
    publicPath: "/",
    filename: "static/js/[name].[chunkhash:8].js",
    chunkFilename: "static/js/[name].[chunkhash:8].js",
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve("public/index.html"),
      filename: "index.html",
      hash: true,

      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          { loader: "@svgr/webpack" },

          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[hash].[ext]?[hash]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new OptimizeCssAssetsPlugin()],
    runtimeChunk: {
      name: "runtime",
    },
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
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
