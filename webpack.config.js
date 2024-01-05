// webpack.config.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  cache: { type: "filesystem" },
  entry: "/app/(root)/page.tsx",
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
