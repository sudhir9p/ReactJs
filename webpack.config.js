var path = require("path");


module.exports = {
 mode: 'development',
 devServer: {
    contentBase: './public',
    publicPath: '/dist',   
    port: 3011,
    hot: true,
    inline: true
  },
  
  entry: __dirname + '/src/index.js',  
  module: {
      rules: [   
          {
              test: /\.js$/,
              use: [
                {
                  loader: 'babel-loader',
                }
              ]
          },
          {
              test: /\.css$/, 
              use: ["style-loader", "css-loader"]
          }       
      ]
  },
  output: {
    path: __dirname + "/dist",  
    filename: 'bundle.js',  
  },
};