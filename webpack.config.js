var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry:'./components/app.js',
  output:{
    path:__dirname+'/www/static/',
    filename:'app/build.js'
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
          name:'./fonts/'+'[name].[ext]'
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
    new ExtractTextPlugin('css/style.css'),
    //进入生产环境
    new webpack.DefinePlugin({
      'process.env': {
        //NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};