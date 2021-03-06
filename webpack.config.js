const path = require('path');

const conf = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  mode: 'development',
  devServer: {
    watchOptions: {
      poll: true,
    },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};

module.exports = conf;
