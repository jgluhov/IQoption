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
    extensions: ["", ".js", ".styl"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "traceur-loader?experimental&runtime"
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader"
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
  watch: true
};
