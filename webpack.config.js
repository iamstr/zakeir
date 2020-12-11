const path = require("path");
const loader = require("sass-loader");
const StylelintPlugin = require("stylelint-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// Extract CSS
const extractCSS = new ExtractTextPlugin("styles.min.css");
module.exports = {
  entry: "./assets/js/index.js",
  output: {
    filename: "bundle.js",

    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new StylelintPlugin({
      configFile: ".stylelintrc.json",
      emitError: true,
      files: "**/*.scss",
      failOnError: false,
      quiet: false,
      syntax: "scss",
      fix: true
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // use: ["style-loader", "css-loader", "sass-loader"]
        // use: ExtractTextPlugin.extract({ use: ["css-loader", "sass-loader"] })
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  mode: "development",
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`
      new CssMinimizerPlugin()
    ]
  }
};
