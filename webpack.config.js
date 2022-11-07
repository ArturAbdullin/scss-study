const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.ts",
    about: "./src/about.ts",
    contact: "./src/contact.ts",
    portfolio: "./src/portfolio.ts",
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
  resolve: {
    extensions: [".ts", ".js"],
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
};
