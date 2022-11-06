const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
