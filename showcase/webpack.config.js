const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const historyApiFallback = require('koa2-connect-history-api-fallback')
const webpackServeWaitpage = require('webpack-serve-waitpage')

const NODE_ENV = 'development'

module.exports = {
  entry: `${__dirname}/index.js`,
  output: { publicPath: '/' },
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'css-loader' },
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [`${__dirname}/../sources/styles`],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'file-loader',
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: `${__dirname}/index.html` }),
  ],
  resolve: {
    modules: ['node_modules', `${__dirname}/../sources`, `${__dirname}/../sources/styles`],
    extensions: ['.scss', '.vue', '.js', '.json', '*'],
  },
  devtool: 'source-map',
  stats: 'minimal',
  serve: {
    add: (app, middleware, options) => {
      app.use(historyApiFallback())
      app.use(webpackServeWaitpage(options, { disableWhenValid: false }))
    },
  },
}
