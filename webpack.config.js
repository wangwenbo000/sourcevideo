var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ReplacePlugin = require('replace-webpack-plugin');
//nawb8MTidY>?
module.exports = {
  entry:{
    index:'./components_index/app.js',
    admin:'./components_admin/admin.js'

  },
  output:{
    path:__dirname+'/www/',
    filename:'/static/app/[name].build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url',
        query:{
          limit:1,
          name:'/static/fonts/'+'[name].[ext]'
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url',
        query:{
          limit:10000,
          name:'/static/img/'+'[name].[ext]'
        }
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  vue:{
    loaders:{
      css: ExtractTextPlugin.extract("css"),
      sass: ExtractTextPlugin.extract("css!sass")
    }
  },
  plugins: [
    new ExtractTextPlugin('/static/css/[name].style.css'),
    //进入生产环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),

    new ReplacePlugin({
      skip: process.env.NODE_ENV === 'development',
      entry: './components_admin/admin.html',
      hash: '[hash]',
      output: './view/admin/index_index.html',
      data: {
        css: '<link type="text/css" rel="stylesheet" href="static/css/admin.style.css?hash=[hash]">',
        js: '<script src="static/app/admin.build.js?hash=[hash]"></script>'
      }
    })
  ]
};