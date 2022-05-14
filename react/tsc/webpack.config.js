module.exports = {
  entry: "./src/index.ts",
  output: {
    path: `${__dirname}/dist`,
    filename: "tsc.bundle.js"
  },
  module:{
    rules:[
      {
        test:/\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use:[{
          loader: "ts-loader"
        }]
      }
  ]},
  resolve: {
    extensions: ['.js', '.ts', 'tsx'],
 }
}
