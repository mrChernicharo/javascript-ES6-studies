module.exports = {
//entry: ['@babel/polyfill','./desafio/desafio1.js'], 
//entry: ['@babel/polyfill','./desafio/desafio2.js'], 
//entry: ['@babel/polyfill','./desafio/desafio3.js'], 
//entry: ['@babel/polyfill','./desafio/desafio4.js'], 
entry: ['@babel/polyfill','./src/main.js'],
//entry: ['@babel/polyfill','./src/main2.js'],
  output: {
    path: __dirname + '/public' ,
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: __dirname + '/public',
  },
  module: {
    rules: [
      {
        test: /\.js$/,      // <== regular expression pra pegar ".js" ( '\' = anything, '$' = end )
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
};