const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /(\.css|\.scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                //modules: true,
                //importLoaders: true
                //localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            },
            /*
            {
              loader: "postcss-loader",
              options: {
                plugins: function () {
                  return [
                    require("autoprefixer")
                  ];
                }
              }
            },
            */
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ],
          plugins: []
        },
        include: [
          path.resolve(__dirname, 'app')
        ]
      }, {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        }
      }, {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  entry: './app/index.jsx',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body',
    })
  ],
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "/dist/"
  }
};