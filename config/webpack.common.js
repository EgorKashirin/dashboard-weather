const path = require("path");
const paths = require("./paths");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.tsx"],

  // Where webpack outputs the assets and bundles
  output: {
    filename: "static/js/[name].[hash].js",
    chunkFilename: "static/js/[name].[chunkhash:8].chunk.js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    // Need for development
    alias: {
      "~": path.resolve(__dirname, "../src/"),
      app: path.resolve(__dirname, "../src/"),
      modules: path.resolve(__dirname, "../src/modules/"),
      components: path.resolve(__dirname, "../src/components/"),
      stores: path.resolve(__dirname, "../src/stores/"),
      containers: path.resolve(__dirname, "../src/containers/"),
      hooks: path.resolve(__dirname, "../src/hooks/"),
      helpers: path.resolve(__dirname, "../src/helpers/"),
      api: path.resolve(__dirname, "../src/api/"),
      layouts: path.resolve(__dirname, "../src/layouts/"),
      selectors: path.resolve(__dirname, "../src/selectors/"),
      constants: path.resolve(__dirname, "../src/constants/"),
      lib: path.resolve(__dirname, "../src/lib/"),
      "react-dom": "@hot-loader/react-dom",
    },
  },

  // Determine how modules within the project are treated
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      // LESS loader with customization
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },

      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [{ loader: "@svgr/webpack" }, { loader: "url-loader" }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
};
