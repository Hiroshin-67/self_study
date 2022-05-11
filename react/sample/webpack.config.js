const path = require('path');

module.exports = {
  entry: {
    test : "./src/index.js",
    sample: "./src/sample.js",
    sample2: "./src/sample.js"
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].bundle.js"
  },
  module:{
    rules: [
      {
        // Babelのローダー設定
        // 対象ファイルの識別子
        test: /\.(js|mjs|jsx)$/,
        // 対象外のフォルダ
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets:[
                "@babel/preset-env",
                "@babel/preset-react",
              ]
            }
          }
        ]
      }
    ]
  },
}
