/**
 * Created by jgluhov on 29/01/16.
 */
module.exports = {
  context: __dirname + "/src",
  entry: "./app.js",
  output: {
    path: __dirname + "/assets",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".styl", ".jade"]
  },
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
  eslint: {
    emitError: false,
    failOnError: false,
    failOnWarning: false,
    quiet: true
  },
  watch: true
};
