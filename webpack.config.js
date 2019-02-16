/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require("path");

const outputPath = resolve(__dirname, "public");

module.exports = (_, { mode }) => ({
  entry: "./src/index.tsx",
  output: {
    path: outputPath,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devtool: mode === "development" ? "source-map" : undefined,
  devServer: {
    contentBase: outputPath
  }
});
