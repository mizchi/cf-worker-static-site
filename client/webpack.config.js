const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: path.join(__dirname, "index"),
  },
  output: {
    path: path.join(__dirname, "../dist"),
  },
  resolve: {
    extensions: [".js", ".mjs", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, "index.html"),
    }),
  ],
};
