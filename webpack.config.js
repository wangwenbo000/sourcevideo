module.exports = {
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }

      },
      {
        test: /\.scss$/,
        loader: ['style', 'css', 'sass']
      }

    ]
  }
};