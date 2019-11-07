const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require("webpackbar");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: "eval-cheap-module-source-map",

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: "./src/page-index/main.js",
    about: "./src/page-about/main.js",
    categories: "./src/page-categories/main.js",
    adminProducts: "./src/page-admin-products/main.js",
    adminHome: "./src/page-admin-home/main.js"
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080,
    writeToDisk: false // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
          // Please note we are not running postcss here
        ]
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|webp|svg|jpg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[path][name].[ext]",
              limit: 10000
            }
          },
          "img-loader"
        ]
      },
      {
        test: /\.hbs$/,
        use: "handlebars-loader"
      },
      {
        test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              limit: 10000,
              mimetype: "application/font-woff"
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new CopyWebpackPlugin([{ from: "src/img", to: "img" }, { from: "src/videos", to: "videos" }]),
    new HtmlWebpackPlugin({
      template: "./src/page-index/tmpl.html",
      chunks: ["index"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-about/tmpl.html",
      chunks: ["about"],
      filename: "about.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-categories/tmpl.html",
      chunks: ["categories"],
      filename: "categories.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-admin-products/tmpl.html",
      chunks: ["adminProducts"],
      filename: "admin-products.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-admin-home/tmpl.html",
      chunks: ["adminHome"],
      filename: "admin-home.html"
    }),
    new WebpackBar()
  ]
};
