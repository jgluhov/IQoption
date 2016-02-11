/**
 * Created by jgluhov on 29/01/16.
 */
var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + "/src",
  entry: {
    app: "./app.js",
    vendor: [
      "jquery",
      "moment",
      "bootstrap-daterangepicker"
    ]
  },
  output: {
    path: __dirname + "/assets",
    publicPath: '/assets',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".styl", ".jade"]
  },
  devtool: "#inline-source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader?presets[]=es2015!eslint-loader"
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader"
      },
      {
        test: /\.jade$/,
        exclude: /node_modules/,
        loader: "jade-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.styl$/,
        loader: "style-loader!css-loader!stylus-loader"
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  noParse: [
    /angular\/angular.js/,
    /angular-ui-router\/release\/angular-ui-router.js/,
    /bootstrap-daterangepicker\/daterangepicker.js/,
    /highcharts\/highcharts.js/,
    /highcharts\/modules\/exporting/
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: '../index.html'
    }),
    new webpack.IgnorePlugin(/\.\/locale/),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],
  eslint: {
    emitError: false,
    failOnError: false,
    failOnWarning: false,
    quiet: true
  },
  watch: true
};
