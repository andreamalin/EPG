const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|otf|mp4)$/i,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: 'dist',
    port: 3000,
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent:
    `<html>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>EPG</title>
      <body>
        <div id="root"></div>
      </body>
    </html> `,
  }),
  new ESLintPlugin({
    extensions: 'jsx',
  })],
}
