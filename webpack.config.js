/**
 * Created by jgluhov on 29/01/16.
 */
var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + "/src",
  entry: "./app.js",
  output: {
    path: __dirname + "/public",
    publicPath: '/',
    filename: "js/bundle.js"
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
        loader: ExtractTextPlugin.extract("style-loader","css-loader")
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader!stylus-loader?resolve url")
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg)$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
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
      template: './index.jade'
    }),
    new webpack.IgnorePlugin(/\.\/locale/),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      moment: 'moment'
    }),
    new ExtractTextPlugin("./css/styles.css", {
      disable: process.env.NODE_ENV == 'development'
    })
  ],
  eslint: {
    emitError: false,
    failOnError: false,
    failOnWarning: false,
    quiet: true
  },
  watch: true
};
