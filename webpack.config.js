const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: {
    index: "./src/scss/main.scss",
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        include: [path.resolve(__dirname, "src/scss")],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My Awesome Site",
      filename: "index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "About Me - My Awesome Site",
      filename: "about.html",
      template: "src/about.html",
    }),
    new HtmlWebpackPlugin({
      title: "Portfolio - My Awesome Site",
      filename: "portfolio.html",
      template: "src/portfolio.html",
    }),
    new HtmlWebpackPlugin({
      title: "Get in Touch - My Awesome Site",
      filename: "contact.html",
      template: "src/contact.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  }
};
