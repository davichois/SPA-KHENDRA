const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ruta = require("path");

module.exports = {
  entry: ruta.resolve(__dirname, "src", "main.js"),
  output: {
    path: ruta.resolve("dist"),
    filename: "main.[hash].js",
    publicPath: "/SPA-KHENDRA/",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: ruta.resolve(__dirname, "public", "index.html"),
    }),

    new MiniCssExtractPlugin(),
  ],
};
